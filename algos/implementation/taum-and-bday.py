# Taum and B'Day
# Initially solved in JS but switched to Python3 because of JS 16-digit limitation without library

def taumBday(b, w, bc, wc, z):
    min_cost_b = min(bc, wc + z)
    min_cost_w = min(wc, bc + z)
    
    return (b * min_cost_b) + (w * min_cost_w)

# Passed 15 test cases successfully.
