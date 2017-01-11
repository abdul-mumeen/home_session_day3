'use strict';

module.exports = Array;
Array.prototype.toTwenty = function()
{
	for(var i = 0; i < 20; i++)
	{
		this[i] = i + 1;
	}
	return this;
};

Array.prototype.toForty = function()
{
	for(var i = 0; i < 20; i++)
	{
		this[i] = (2 * i) + 2;
	}
	return this;
};

Array.prototype.toOneThousand = function()
{
	for(var i = 0; i < 100; i++)
	{
		this[i] = (10 * i) + 10;
	}
	return this;
};

var midTerm = function(first, last)
{
	return Math.floor((first + last)/2);
};

Array.prototype.search = function(num)
{
	var result = {
		count: 0,
		index: -1,
		length: this.length
	};

	
	var first = 0;
	var last = this.length - 1;
	var middle = midTerm(first,last);
	if (num === this[first])
	{
		middle = first;
	}
	else if (num === this[last])
	{
		middle = last;
	}
	else
	{
		while(this[middle] != num && first < last)
		{
			result.count++;
	        if (num < this[middle])
	        {
	            last = middle - 1;
	        } 
	        else
	        {
	            first = middle + 1;
	        }
	        middle = midTerm(first,last);
	    }
	}
	
   	result.index = (this[middle] === num) ? middle : -1;
   	return result;
};
