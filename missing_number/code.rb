def missing_number(array)
  array.sort!
  return 1 if array[0] != 1
  array.each_with_index do |num, i|
    return num + 1 if num + 1 != array[i + 1]
  end
end


