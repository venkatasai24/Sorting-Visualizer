function bubble()
{
    randomize();
    $("#demo").html("<strong><a href='https://www.geeksforgeeks.org/bubble-sort/' style='color:black;' target='_blank'>Bubble Sort</a></strong><br>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.<br>Time Complexity : O(N<sup>2</sup>) <br>Space Complexity : O(1) <br><br> <center><button type='button' onclick='bubbleSort()' class='btn button-response btn-info' style='color: white;' >Start</button></center>");
    animate($("#demo"));
}
function insertion()
{
    randomize();
    $("#demo").html("<strong><a href='https://www.geeksforgeeks.org/insertion-sort/' style='color:black;' target='_blank'>Insertion Sort</a></strong><br>Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.<br>Time Complexity : O(N<sup>2</sup>) <br>Auxiliary Space : O(1) <br><br> <center><button type='button' onclick='insertionSort()' class='btn button-response btn-info' style='color: white;' >Start</button></center> ");
    animate($("#demo"));
}

function selection()
{
    randomize();
    $("#demo").html("<strong><a href='https://www.geeksforgeeks.org/selection-sort/' style='color:black;' target='_blank'>Selection Sort</a></strong><br>Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest element from the unsorted portion of the list and moving it to the sorted portion of the list. The algorithm repeatedly selects the smallest element from the unsorted portion of the list and swaps it with the first element of the unsorted portion. This process is repeated for the remaining unsorted portion of the list until the entire list is sorted.<br>Time Complexity : O(N<sup>2</sup>) <br>Auxiliary Space : O(1) <br><br> <center><button type='button' onclick='selectionSort()' class='btn button-response btn-info' style='color: white;' >Start</button></center>");
    animate($("#demo"));
}

function merge()
{
    randomize();
    $("#demo").html("<strong><a href='https://www.geeksforgeeks.org/merge-sort/' style='color:black;' target='_blank'>Merge Sort</a></strong><br>Merge sort is a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.In simple terms, we can say that the process of merge sort is to divide the array varo two halves, sort each half, and then merge the sorted halves back together. This process is repeated until the entire array is sorted.<br>Time Complexity : O(Nlog(N)) <br>Auxiliary Space : O(N) <br><br> <center><button type='button' onclick='mergeSort()' class='btn button-response btn-info' style='color: white;' >Start</button></center> ");
    animate($("#demo"));
}

function heap()
{
    randomize();
    $("#demo").html("<strong><a href='https://www.geeksforgeeks.org/heap-sort/' style='color:black;' target='_blank'>Heap Sort</a></strong><br>Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements.<br>Time Complexity : O(Nlog(N)) <br>Auxiliary Space : O(1) <br><br> <center><button type='button' onclick='heapSort()' class='btn button-response btn-info' style='color: white;' >Start</button></center> ");
    animate($("#demo"));
}

function quick()
{
    randomize();
    $("#demo").html("<strong><a href='https://www.geeksforgeeks.org/quick-sort/' style='color:black;' target='_blank'>Quick Sort</a></strong><br> QuickSort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.<br>Time Complexity : O(Nlog(N)) <br>Auxiliary Space : O(Nlog(N)) <br><br> <center><button type='button' onclick='quickSort()' class='btn button-response btn-info' style='color: white;' >Start</button></center> ");
    animate($("#demo"));
}

function removeContent()
{
    randomize();
    $("#demo").html("");
    animate($("#demo"));
}

var flag = false ;

var ArrayLength = document.querySelectorAll(".container-bar").length;

var array = [] ;

var indices=[];

var delay = 2 ;

var functionNumber = 0;

var barContainerWidth =  window.getComputedStyle(document.querySelector(".bar-container")).width;

var barContainerHeight =  window.getComputedStyle(document.querySelector(".bar-container")).height;

barContainerHeight = barContainerHeight.replace(/px/g,"");

barContainerWidth = barContainerWidth.replace(/px/g,"");

async function headerName()
{
    $("#sort").html("hjsjhbs fjffywfijh");
    await sleep(100);
    $("#sort").html("dhbsdjg kjfhhsjhhd");
    await sleep(100);
    $("#sort").html("hejhfng ncvbkhfjhh");
    await sleep(100);
    $("#sort").html("lsdning ukghfvjhfa");
    await sleep(100);
    $("#sort").html("hjjting fjffywfijh");
    await sleep(100);
    $("#sort").html("drrting dvkfivfhfu");
    await sleep(100);
    $("#sort").html("norting phgfhfkhfs");
    await sleep(100);
    $("#sort").html("Sorting jkhkfkhfkw");
    await sleep(100);
    $("#sort").html("Sorting bugydghfjj");
    await sleep(100);
    $("#sort").html("Sorting lkjhgfdsar");
    await sleep(100);
    $("#sort").html("Sorting ghskerbher");
    await sleep(100);
    $("#sort").html("Sorting kjfhhsjzer");
    await sleep(100);
    $("#sort").html("Sorting ncvbkhizer");
    await sleep(100);
    $("#sort").html("Sorting ukghflizer");
    await sleep(100);
    $("#sort").html("Sorting fjffalizer");
    await sleep(100);
    $("#sort").html("Sorting dvkualizer");
    await sleep(100);
    $("#sort").html("Sorting phsualizer");
    await sleep(100);
    $("#sort").html("Sorting lisualizer");
    await sleep(100);
    $("#sort").html("Sorting Visualizer");
}

function randomize()
{
    if( flag===false )
    {
        array = [] ;
        for(var i=0; i<ArrayLength ; i++)
        {
            barContainerWidth =  window.getComputedStyle(document.querySelector(".bar-container")).width;
            barContainerHeight =  window.getComputedStyle(document.querySelector(".bar-container")).height;
            barContainerHeight = barContainerHeight.replace(/px/g,"");
            barContainerWidth = barContainerWidth.replace(/px/g,"");
            var newHeight = Math.ceil(Math.random()*parseFloat(barContainerHeight));
            array.push(newHeight);
            newHeight+="px";
            var element = document.querySelectorAll(".container-bar")[i];
            element.style.height = newHeight;
            var newWidth=parseFloat(barContainerWidth)/((2*ArrayLength)-1);
            element.style.width=newWidth+"px";
            element.style.left=(2*i*newWidth)+"px";
            element.classList.remove("final");
        }
    }
}

function randomizeEntire()
{
    headerName();
    randomize();
}

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort()
{
    if( flag===false )
    {
        flag=true;
        functionNumber = 1 ;
        var randomFlag;
        for(var i=0;i<ArrayLength-1;i++)
        {
            randomFlag=false;
            for (var j = 0; j < ArrayLength-i-1; j++)
            {
                if (array[j] > array[j+1])
                {
                    animateBar(document.querySelectorAll(".container-bar")[j]);
                    animateBar(document.querySelectorAll(".container-bar")[j+1]);
                    await sleep(delay);
                    randomFlag=true;
                    var temp=array[j+1];
                    array[j+1]=array[j];
                    array[j]=temp;
                    reAssignRed();
                }
            }
            if( randomFlag===false )
            {
                break;
            }
        }
            reAssign();
            flag=false;
        }
}

async function insertionSort()
{
    if( flag===false )
    {
        flag=true;
        functionNumber =  1 ;
        var i, j , n=ArrayLength;
        for( i=1 ; i < n ; i++ )
        {
            j=i;
            while( j>0 && array[j-1]>array[j] )
            {
                animateBar(document.querySelectorAll(".container-bar")[j-1]);
                animateBar(document.querySelectorAll(".container-bar")[j]);
                await sleep(delay);
                var temp=array[j-1];
                array[j-1]=array[j];
                array[j]=temp;
                reAssignRed();
                j--;
            }
        }
        reAssign();
        flag=false;
    }
}

async function selectionSort() 
{ 
    if( flag===false )
    {
        flag=true;
        var i, j, min_idx , n=ArrayLength; 
        for (i = 0; i < n-1; i++)
        {
            functionNumber = 3 ;
            min_idx = i; 
            for (j = i+1 ; j < n; j++)
            {
                animateBar(document.querySelectorAll(".container-bar")[min_idx]);
                if (array[j] < array[min_idx]) 
                {
                    min_idx = j;
                    animateBar(document.querySelectorAll(".container-bar")[min_idx]);
                    await sleep(delay);

                }
            }
            functionNumber = 1 ;
            if( min_idx !== i )
            {
                animateBar(document.querySelectorAll(".container-bar")[i]);
                animateBar(document.querySelectorAll(".container-bar")[min_idx]);
                await sleep(delay);
                var temp=array[i];
                array[i]=array[min_idx];
                array[min_idx]=temp;
                reAssignRed();
            }
        }
        reAssign();
        flag=false;
    }
}

function mergesortindices(array,s,e)
{
    if(s<e)
    {
        var m=Math.floor((s+e)/2);
        mergesortindices(array,s,m);
        mergesortindices(array,m+1,e);
        indices.push(s);
        indices.push(m);
        indices.push(e);
    }
}

async function MergeSort(array,n)
{
    indices=[];
    mergesortindices(array,0,n-1);
    var start,mid,end;
    for(let index=0 ; index<indices.length ; )
    {
        start=indices[index++];
        mid=indices[index++];
        end=indices[index++];
        var n1 = mid - start + 1;
        var n2 = end - mid ;
        var L = [] ;
        var R = [] ;
        for (i = 0; i < n1; i++)
        {
            L.push(array[start + i]);
        }
        for (j = 0; j < n2; j++)
        {
            R.push(array[mid + 1+ j]);
        }
        i = 0;
        j = 0;
        k = start;
        while (i < n1 && j < n2)
        {
            animateBar(document.querySelectorAll(".container-bar")[i+start]);
            animateBar(document.querySelectorAll(".container-bar")[j+mid+1]);
            await sleep(delay);
            if (L[i] <= R[j])
            {
                array[k] = L[i];
                i++;
            }
            else
            {
                array[k] = R[j];
                j++;
            }
            reAssignRed();
            k++;
        }
        while (i < n1)
        {
            animateBar(document.querySelectorAll(".container-bar")[i+start]);
            array[k] = L[i];
            await sleep(delay);   
            reAssignRed();   
            i++;
            k++;
        }
        while (j < n2)
        {
            animateBar(document.querySelectorAll(".container-bar")[j+mid+1]);
            array[k] = R[j];
            await sleep(delay);
            reAssignRed();
            j++;
            k++;
        }
    }
}

function mergeSort()
{
    if( flag===false )
    {
        flag=true;
        functionNumber = 2 ;
        const startTime = performance.now();
        MergeSort(array,ArrayLength).then(() => {
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        period=executionTime;
        console.log(`Execution time: ${executionTime} milliseconds`);
        reAssign();
        flag=false;
        });
    }
}


async function HeapSort(array,n)
{
    for (let i = 1; i < n; i++)
    {
        if (array[i] > array[Math.floor((i - 1) / 2)])
        {
            let j = i;
            while (array[j] > array[Math.floor((j - 1) / 2)])
            {
                animateBar(document.querySelectorAll(".container-bar")[j]);
                animateBar(document.querySelectorAll(".container-bar")[Math.floor((j-1)/2)]);
                await sleep(delay);
                var temp=array[j];
                array[j]=array[Math.floor((j-1)/2)];
                array[Math.floor((j-1)/2)]=temp;
                reAssignRed();
                j = Math.floor((j - 1) / 2);
            }
        }
    }
    for (var i = n - 1; i > 0; i--)
    {
        animateBar(document.querySelectorAll(".container-bar")[i]);
        animateBar(document.querySelectorAll(".container-bar")[0]);
        await sleep(delay);
        var temp=array[0];
        array[0]=array[i];
        array[i]=temp;
        reAssignRed();
        var j = 0, index;
        do
        {
            index = (2 * j + 1);
            if (array[index] < array[index + 1] && index < (i - 1))
            {
                index++;
            }
            if (array[j] < array[index] && index < i)
            {
                animateBar(document.querySelectorAll(".container-bar")[j]);
                animateBar(document.querySelectorAll(".container-bar")[index]);
                await sleep(delay);
                temp=array[j];
                array[j]=array[index];
                array[index]=temp;
                reAssignRed();
            }
            j = index;
        } 
        while (index < i);
    }
}

function heapSort()
{
    if( flag===false )
    {
        flag=true;
        functionNumber = 2 ;
        const startTime = performance.now();
        HeapSort(array,ArrayLength).then(() => {
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        period=executionTime;
        console.log(`Execution time: ${executionTime} milliseconds`);
        reAssign();
        flag=false;
        });
    }
}

async function quickSortIterative(array,l,h)
{
    var stack = new Array(h - l + 1);
    var top = -1;
    stack[++top] = l;
    stack[++top] = h;
    while (top >= 0)
    {
        h = stack[top--];
        l = stack[top--];
        var p ;
        var x = array[h];
        var i = (l - 1);
        for (var j = l; j <= h - 1; j++) 
        {
            if (array[j] <= x) 
            {
                i++;
                animateBar(document.querySelectorAll(".container-bar")[h]);
                animateBar(document.querySelectorAll(".container-bar")[i]);
                animateBar(document.querySelectorAll(".container-bar")[j]);
                var temp=array[i];
                array[i]=array[j];
                array[j]=temp;
                reAssignRed();
            }
            await sleep(delay);
        }
        animateBar(document.querySelectorAll(".container-bar")[i+1]);
        animateBar(document.querySelectorAll(".container-bar")[h]);
        await sleep(delay);
        var temp=array[i+1];
        array[i+1]=array[h];
        array[h]=temp;
        reAssignRed();
        p=i+1;
        if (p + 1 < h) {
            stack[++top] = p + 1;
            stack[++top] = h;
        }
        if (p - 1 > l) 
        {
            stack[++top] = l;
            stack[++top] = p - 1;
        }
    }
}

function quickSort()
{
    if( flag===false )
    {
        flag=true;
        functionNumber = 2;
        const startTime = performance.now();
        quickSortIterative(array,0,ArrayLength-1).then(() => {
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        period=executionTime;
        console.log(`Execution time: ${executionTime} milliseconds`);
        reAssign();
        flag=false;
        });
    }
}

async function reAssign()
{
    for(var i=0 ; i<ArrayLength ; i++ )
    {
        var sortHeight=array[i];
        sortHeight+="px";
        var element = document.querySelectorAll(".container-bar")[i];
        element.style.height=sortHeight;
        element.classList.add("final");
        await sleep(1);
    }
}

function reAssignRed()
{
    for(var i=0 ; i<ArrayLength ; i++ )
    {
        var sortHeight=array[i];
        sortHeight+="px";
        var element = document.querySelectorAll(".container-bar")[i];
        element.style.height=sortHeight;
    }
}


function animate(element)
{
    element.slideUp(0).slideDown(1000);
    //element.fadeOut(0).fadeIn(1000);
}

function animateBar(element)
{
    if(functionNumber === 1 ) delay = 1 ;
    else if(functionNumber === 2)  delay = 10 ;
    else delay = 100 ;
    element.classList.add("container-bar-intermediate");
    setTimeout(function(){
        element.classList.remove("container-bar-intermediate")
    },delay);
}
