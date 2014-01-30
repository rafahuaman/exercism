#gem install ruby-prof
require 'ruby-prof'

class Grains
  def square(number)
    2**(number-1)
  end
  
  def total
    2**(64)-1
  end
  
  def show
    (1..64).to_a.each do |square_number|
      puts "Square #{square_number}: #{square(square_number)}"
    end
    puts "Total: #{total}"
  end
end

RubyProf.start
Grains.new.show

result = RubyProf.stop

# Print a flat profile to text
printer = RubyProf::FlatPrinter.new(result)
printer.print(STDOUT)