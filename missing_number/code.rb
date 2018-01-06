def missing_number(array)
  number = array.reduce do |sum, n|
    sum + n
  end
  array.sort!
  ideal_number = (array[0]..array[-1]).to_a.reduce do |sum, n|
    sum + n
  end
  ideal_number - number
end
