class ComboLock:
    def init(self,first_unlock:int,second_unlock:int, third_unlock: int):
        if not(0 <= first_unlock <= 39) or not (0 <= second_unlock <=39) or not(0 <= third_unlock <= 39):
            raise ValueError("Numbers must be between 0 and 39 inclusive!")
        self.first_unlock = first_unlock
        self.second_unlock = second_unlock
        self.third_unlock = third_unlock
        self.position = 0
        self.tumbler_1_state = None
        self.tumbler_2_state = None
        self.tumbler_3_state = None
        self.locked = False

    def turn_clockwise(self,num_ticks: int):
        if not self.locked:
            self.position = (self.position + num_ticks) % 40
            if self.tumbler_1_state is None:
                self.tumbler_1_state = self.position
            elif self.tumbler_2_state is None:
                self.tumbler_2_state = self.position
            elif self.tumbler_3_state is None:
                self.tumbler_3_state = self.position

    def turn_counter_clockwise(self,num_ticks: int):
        if not self.locked:
            self.position = (self.position - num_ticks) % 40

            if self.tumbler_1_state is not None and self.tumbler_1_state == self.position:
                self.tumbler_1_state = 0
            elif self.tumbler_2_state is not None and self.tumbler_2_state == self.position:
                self.tumbler_2_state = 0

            elif self.tumbler_3_state is not None and self.tumbler_3_state == self.position:
                self.tumbler_3_state = 0 


