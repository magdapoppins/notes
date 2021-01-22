import random
# Factorial of 6 is 270 (this is the count of possible orderings)
values = [1,4,3,2,5,8]
# Naive approach (choosing random for each i) would be 6^6 = 46656 options
# Since 46656 is not evenly divisable by the possible outcomes count 270
# the distribution of the naive shuffle is not uniform, meaning that 
# all outcomes are not equally probable


def get_random(values):
	return random.choice(values)

# Fisher-Yates shuffle (new list in front of old list)
def in_place_shuffle(values):
	if len(values) <= 1:
		return values
	for i in range(len(values)-1):
		random_index = get_random(values[i:])
		values[i], values[random_index] = values[random_index], values[i]
	return values

print(in_place_shuffle(values))