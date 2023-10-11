for trigger_block in strategy["conditions"]:
    multi_condition_triggers = pd.DataFrame()
    for n in range(0, len(trigger_block["object_1"])):
        if trigger_block["test"][n] in [">", "<", "==", ">=", "<="]:
            exec(
                "multi_condition_triggers['{n}'] = ([(trigger_block['action'] if o1 {test} float(trigger_block['object_2'][n]) else None) for o1 in indicators[trigger_block['object_1'][n]]]) if trigger_block['type'][n] == 'indicator_value' else ([(trigger_block['action'] if o1 {test} o2 else None) for o1, o2 in zip(indicators[trigger_block['object_1'][n]], indicators[trigger_block['object_2'][n]])])".format(
                    test=trigger_block["test"][n], n=n
                )
            )
        elif trigger_block["test"][n] == "overtake":
            multi_condition_triggers["{n}".format(n=n)] = list(
                map(
                    lambda o1_1, o2_1, o1_2, o2_2: trigger_block["action"]
                    if o1_2 > o2_2 and o1_1 < o2_1
                    else None,
                    indicators[trigger_block["object_1"][n]].shift(),
                    indicators[trigger_block["object_2"][n]].shift(),
                    indicators[trigger_block["object_1"][n]],
                    indicators[trigger_block["object_2"][n]],
                )
            )
    backtest_data_df[
        trigger_block["identifier"] + "_Trigger"
    ] = multi_condition_triggers.apply(
        lambda x: all(x == trigger_block["action"]), axis=1
    )
