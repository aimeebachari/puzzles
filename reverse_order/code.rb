def reverse_order(string)
  a = string.split(" ")
  reverse = []

  a.length.times do |element|
    reverse << a.pop
  end

  reverse.join(" ")
end
