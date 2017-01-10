'use strict';

Array.prototype.toTwenty = function()
{
	for(var i = 0; i < 20; i++)
	{
		this[i] = i + 1;
	}
}

Array.prototype.toForty = function()
{
	for(var i = 0; i < 40; i = i + 2)
	{
		this[i] = i + 2;
	}
}

Array.prototype.toOneThousand = function()
{
	for(var i = 0; i < 1000; i = i + 10)
	{
		this[i] = i + 10;
	}
}

var midTerm = function(first, last)
{
	return Math.floor((first + last)/2);
}

Array.prototype.search = function(num)
{
	var result = {
		count: 0,
		index: "".
		length: this.length
	};

	var first = 0;
	var last = this.length - 1;
	var middle = midTerm(first,last);

	this.sort();

	while(this[middle] != num && first < last)
	{
		result.count++;
        if (num < this[middle])
        {
            last = middle - 1;
        } else if (num > this[middle])
        {
            first = middle + 1;
        }
        middle = midTerm(first,last);
    }
   	if(this[middle] === num)
   	{
   		result.index = middle;
   	}
   	return result;
}
