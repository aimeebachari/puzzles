
def include?(array, item)
  array.each do |element|
    return true if item == element
  end
  false
end
