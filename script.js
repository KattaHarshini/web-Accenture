document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
        {
    "question": "Write a program to check if a given number is a palindrome.",
    "description": "Given an integer, write a function to determine if it reads the same forwards and backward.",
    "hint": "Convert the number to a string or use mathematical operations to reverse it.",
    "answer": `
        <p><strong>Solution Approach (String Conversion):</strong></p>
        <ol>
            <li>Convert the integer to its string representation.</li>
            <li>Reverse the string.</li>
            <li>Compare the original string with the reversed string. If they are the same, the number is a palindrome.</li>
        </ol>

        <pre><code>function isPalindromeNumber(num) {
            const str = String(num);
            const reversedStr = str.split('').reverse().join('');
            return str === reversedStr;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(log n) - where n is the number, due to the number of digits.</p>
        <p><strong>Space Complexity:</strong> O(log n) - to store the string representation of the number.</p>
    `
  },
  {
    "question": "Write a program to sort an array of integers.",
    "description": "Given an array of integers, write a function to sort the array in ascending order.",
    "hint": "You can implement various sorting algorithms like Bubble Sort, Insertion Sort, Merge Sort, or Quick Sort. Choose one and implement it.",
    "answer": `
        <p><strong>Solution Approach (Bubble Sort):</strong></p>
        <ol>
            <li>Iterate through the array multiple times.</li>
            <li>In each iteration, compare adjacent elements and swap them if they are in the wrong order (the smaller element should come before the larger one).</li>
            <li>Repeat this process until no more swaps are needed, indicating that the array is sorted.</li>
        </ol>

        <pre><code>function bubbleSort(arr) {
            const n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        // Swap arr[j] and arr[j+1]
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    }
                }
            }
            return arr;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n^2) - in the worst and average case for Bubble Sort.</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space as the sorting is done in-place.</p>
    `
  },
  {
    "question": "Write a program to count the number of occurrences of each character in a string.",
    "description": "Given a string `s`, write a function to count how many times each character appears in the string.",
    "hint": "Use a hash map (or an object in JavaScript) to store the character counts.",
    "answer": `
        <p><strong>Solution Approach (Using a Hash Map):</strong></p>
        <ol>
            <li>Create an empty hash map to store character counts.</li>
            <li>Iterate through the input string, character by character.</li>
            <li>For each character, if it's already in the hash map, increment its count. Otherwise, add it to the map with a count of 1.</li>
            <li>After iterating through the entire string, the hash map will contain the count of each character.</li>
        </ol>

        <pre><code>function countCharacterOccurrences(s) {
            const charCounts = {};
            for (let char of s) {
                charCounts[char] = (charCounts[char] || 0) + 1;
            }
            return charCounts;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the length of the string, as we iterate through it once.</p>
        <p><strong>Space Complexity:</strong> O(k) - where k is the number of unique characters in the string, to store the counts in the hash map.</p>
    `
  },
  {
    "question": "Implement a function to find the first non-repeating character in a string.",
    "description": "Given a string `s`, find the first character that appears only once in the string.",
    "hint": "Use a frequency map to store the count of each character, and then iterate through the string to find the first character with a count of 1.",
    "answer": `
        <p><strong>Solution Approach (Frequency Counting):</strong></p>
        <ol>
            <li>Create a frequency map to store the count of each character in the string.</li>
            <li>Iterate through the string and update the counts in the map.</li>
            <li>Iterate through the string again. For each character, check its count in the map. If the count is 1, return that character.</li>
            <li>If the loop completes without finding a non-repeating character, return a special value (e.g., null or an empty string).</li>
        </ol>

        <pre><code>function firstNonRepeatingCharacter(s) {
            const charCounts = {};
            for (let char of s) {
                charCounts[char] = (charCounts[char] || 0) + 1;
            }
            for (let char of s) {
                if (charCounts[char] === 1) {
                    return char;
                }
            }
            return null;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the length of the string, as we iterate through it at most twice.</p>
        <p><strong>Space Complexity:</strong> O(k) - where k is the number of unique characters in the string, to store the counts in the hash map.</p>
    `
  },
  {
    "question": "Implement a function to remove duplicate elements from an array.",
    "description": "Given an array, write a function to return a new array containing only the unique elements from the original array.",
    "hint": "You can use a Set to keep track of unique elements or iterate through the array and check if an element has already been added to the result.",
    "answer": `
        <p><strong>Solution Approach (Using a Set):</strong></p>
        <ol>
            <li>Create a new empty Set.</li>
            <li>Iterate through the input array.</li>
            <li>For each element, add it to the Set. Sets automatically store only unique values.</li>
            <li>Convert the Set back to an array and return it.</li>
        </ol>

        <pre><code>function removeDuplicates(arr) {
            return [...new Set(arr)];
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the length of the array, as we iterate through it once.</p>
        <p><strong>Space Complexity:</strong> O(n) - in the worst case, if all elements are unique, the Set will store n elements.</p>
    `
  },
  {
    "question": "Write a program to check if a given year is a leap year.",
    "description": "Given a year, write a function to determine if it is a leap year according to the Gregorian calendar rules.",
    "hint": "A year is a leap year if it is divisible by 4, unless it is divisible by 100 but not by 400.",
    "answer": `
        <p><strong>Solution Approach (Leap Year Rules):</strong></p>
        <ol>
            <li>Check if the year is divisible by 4. If not, it's not a leap year.</li>
            <li>If the year is divisible by 100, then it is a leap year only if it is also divisible by 400.</li>
            <li>If the year is divisible by 4 but not by 100, it is a leap year.</li>
        </ol>

        <pre><code>function isLeapYear(year) {
            if (year % 4 !== 0) {
                return false;
            }
            if (year % 100 === 0) {
                return year % 400 === 0;
            }
            return true;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(1) - constant time as it involves a fixed number of arithmetic operations.</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space.</p>
    `
  },
  {
    "question": "Implement a function to find the intersection of two arrays.",
    "description": "Given two arrays, write a function to find the elements that are common to both arrays. The result should contain only unique elements.",
    "hint": "Use Sets to efficiently find common elements.",
    "answer": `
        <p><strong>Solution Approach (Using Sets):</strong></p>
        <ol>
            <li>Create a Set from the elements of the first array.</li>
            <li>Create another empty Set to store the intersection.</li>
            <li>Iterate through the second array. For each element, check if it exists in the first Set.</li>
            <li>If an element from the second array is present in the first Set, add it to the intersection Set.</li>
            <li>Convert the intersection Set to an array and return it.</li>
        </ol>

        <pre><code>function findIntersection(arr1, arr2) {
            const set1 = new Set(arr1);
            const intersectionSet = new Set();
            for (let num of arr2) {
                if (set1.has(num)) {
                    intersectionSet.add(num);
                }
            }
            return [...intersectionSet];
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(m + n) - where m and n are the lengths of the two arrays, due to the creation of the Set and the iteration.</p>
        <p><strong>Space Complexity:</strong> O(min(m, n)) - in the worst case, the Set will store elements of the smaller array.</p>
    `
  },
  {
    "question": "Implement a function to find all subsets of a given set.",
    "description": "Given a set of distinct integers, write a function to generate all possible subsets (the power set).",
    "hint": "You can use an iterative approach by starting with an empty set and adding each element to all existing subsets to create new ones.",
    "answer": `
        <p><strong>Solution Approach (Iterative):</strong></p>
        <ol>
            <li>Initialize a list of subsets with an empty set</li>
            <li>Iterate through each element in the input set.</li>
            <li>For each element, iterate through all the existing subsets in the result list.</li>
            <li>Create a new subset by adding the current element to each of the existing subsets.</li>
            <li>Add these new subsets to the result list.</li>
            <li>After iterating through all elements, the result list will contain all possible subsets.</li>
        </ol>

        <pre><code>function findAllSubsets(nums) {
            const subsets = [[]];
            for (const num of nums) {
                const n = subsets.length;
                for (let i = 0; i < n; i++) {
                    const currentSubset = subsets[i].slice(); // Create a copy
                    currentSubset.push(num);
                    subsets.push(currentSubset);
                }
            }
            return subsets;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n * 2^n) - where n is the number of elements in the set. There are 2^n subsets, and for each element, we might iterate through existing subsets.</p>
        <p><strong>Space Complexity:</strong> O(n * 2^n) - to store all the generated subsets.</p>
    `
  },
  {
    "question": "Implement a function to find the longest common prefix of an array of strings.",
    "description": "Write a function that takes an array of strings and returns the longest common prefix string among them.",
    "hint": "Compare the characters at each index across all strings.",
    "answer": `
        <p><strong>Solution Approach (Character by Character Comparison):</strong></p>
        <ol>
            <li>If the array is empty, return an empty string.</li>
            <li>Take the first string as the initial prefix.</li>
            <li>Iterate through the remaining strings in the array.</li>
            <li>For each string, compare its characters with the current prefix, character by character, until a mismatch is found or the end of either the prefix or the string is reached.</li>
            <li>Update the prefix to be the common part found so far.</li>
            <li>After iterating through all strings, return the final prefix.</li>
        </ol>

        <pre><code>function longestCommonPrefix(strs) {
            if (!strs || strs.length === 0) {
                return '';
            }
            let prefix = strs[0];
            for (let i = 1; i < strs.length; i++) {
                let j = 0;
                while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
                    j++;
                }
                prefix = prefix.substring(0, j);
                if (prefix === '') {
                    break;
                }
            }
            return prefix;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(S) - where S is the total number of characters across all strings in the worst case.</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space.</p>
    `
  },
  {
    "question": "Implement a function to perform a breadth-first search (BFS) on a graph.",
    "description": "Given a graph represented as an adjacency list and a starting node, write a function to perform a Breadth-First Search (BFS) and print the nodes in the order they are visited.",
    "hint": "Use a queue to keep track of nodes to visit and a set to keep track of visited nodes to avoid cycles.",
    "answer": `
        <p><strong>Solution Approach (Using a Queue and a Set):</strong></p>
        <ol>
            <li>Initialize a queue and enqueue the starting node.</li>
            <li>Initialize a set to keep track of visited nodes and add the starting node to it.</li>
            <li>While the queue is not empty:</li>
            <ul>
                <li>Dequeue a node from the front of the queue.</li>
                <li>Process the current node (e.g., print its value).</li>
                <li>For each neighbor of the current node:</li>
                <ul>
                    <li>If the neighbor has not been visited:</li>
                    <ul>
                        <li>Enqueue the neighbor.</li>
                        <li>Mark the neighbor as visited by adding it to the set.</li>
                    </ul>
                </ul>
            </ul>
        </ol>

        <pre><code>function breadthFirstSearch(graph, startNode) {
            const queue = [startNode];
            const visited = new Set([startNode]);
            const result = [];

            while (queue.length > 0) {
                const currentNode = queue.shift();
                result.push(currentNode); // Or process the node

                for (const neighbor of graph[currentNode] || []) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
            return result;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(V + E) - where V is the number of vertices and E is the number of edges in the graph, as we visit each vertex and each edge once.</p>
        <p><strong>Space Complexity:</strong> O(V) - to store the visited set and the queue (in the worst case, the queue might contain all vertices).</p>
    `
  },
  {
    "question": "Implement a function to reverse the words in a given string.",
    "description": "Given a string `s`, write a function to reverse the order of words in the string. For example, 'the sky is blue' should become 'blue is sky the'.",
    "hint": "Split the string into words, reverse the order of the words, and then join them back into a string.",
    "answer": `
        <p><strong>Solution Approach (Splitting, Reversing, and Joining):</strong></p>
        <ol>
            <li>Split the input string into an array of words using spaces as delimiters.</li>
            <li>Reverse the order of the elements in the array.</li>
            <li>Join the reversed array of words back into a string using spaces as separators.</li>
        </ol>

        <pre><code>function reverseWords(s) {
            return s.split(' ').reverse().join(' ');
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the length of the string, due to splitting, reversing the array of words, and joining.</p>
        <p><strong>Space Complexity:</strong> O(n) - to store the array of words.</p>
    `
  },
  {
    "question": "Describe a time when you had to make a difficult decision with incomplete information. What was the situation, and how did you approach the decision-making process?",
    "description": "This question evaluates your problem-solving, analytical, and decision-making skills under pressure and uncertainty.",
    "hint": "Choose a situation where you lacked all the necessary information. Explain how you gathered available data, analyzed the risks and benefits of different options, and made your choice.",
    "answer": `
        <p><strong>Sample Answer Structure (Focus on Decision-Making under Uncertainty):</strong></p>
        <ol>
            <li><strong>Situation:</strong> Describe the situation where you had to make a decision with limited information, outlining the key factors and the uncertainty involved.</li>
            <li><strong>Information Gathering:</strong> Explain what steps you took to gather the available information (e.g., consulting with others, reviewing existing data, making assumptions based on experience).</li>
            <li><strong>Analysis of Options:</strong> Describe the different options you considered and the potential risks and benefits associated with each, given the limited information.</li>
            <li><strong>Decision-Making Process:</strong> Explain how you weighed the options and made your final decision. What criteria did you use? Did you prioritize certain factors? Did you involve others in the decision?</li>
            <li><strong>Outcome:</strong> Describe the result of your decision. What did you learn from this experience about making decisions with incomplete information? Would you approach a similar situation differently in the future?</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Analytical skills, Problem-solving, Risk assessment, Decisiveness, Collaboration, Learning from experience.</p>
    `
  },
  {
    "question": "Describe a situation where you had to adapt to a significant change in a project or work environment. How did you handle the transition?",
    "description": "This question evaluates your adaptability and resilience in the face of change.",
    "hint": "Choose a specific example where change occurred. Focus on your initial reaction, the steps you took to understand and embrace the change, and the final outcome.",
    "answer": `
        <p><strong>Sample Answer Structure (Focus on Adaptability):</strong></p>
        <ol>
            <li><strong>Situation:</strong> Describe the project or work environment before the change and the nature of the significant change that occurred (e.g., new technology, shifting priorities, team restructuring).</li>
            <li><strong>Initial Reaction:</strong> Briefly mention your initial thoughts or feelings about the change. Be honest but maintain a positive overall tone.</li>
            <li><strong>Steps Taken:</strong> Explain the actions you took to adapt, such as:
                <ul>
                    <li>Seeking information and understanding the reasons behind the change.</li>
                    <li>Proactively learning new skills or processes.</li>
                    <li>Collaborating with colleagues to navigate the transition.</li>
                    <li>Maintaining a positive attitude and focusing on the opportunities presented by the change.</li>
                    <li>Being flexible and adjusting your work style or approach.</li>
                </ul>
            <li><strong>Outcome:</strong> Describe the final result of the change and your ability to adapt. Highlight any positive contributions you made during the transition and what you learned about yourself and handling change.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Flexibility, Openness to learning, Resilience, Positive attitude, Problem-solving, Proactiveness.</p>
    `
  },
  {
    "question": "Describe a time when you had to make a difficult decision with incomplete information. What was the situation, and how did you approach the decision-making process?",
    "description": "This question evaluates your problem-solving, analytical, and decision-making skills under pressure and uncertainty.",
    "hint": "Choose a situation where you lacked all the necessary information. Explain how you gathered available data, analyzed the risks and benefits of different options, and made your choice.",
    "answer": `
        <p><strong>Sample Answer Structure (Focus on Decision-Making under Uncertainty):</strong></p>
        <ol>
            <li><strong>Situation:</strong> Describe the situation where you had to make a decision with limited information, outlining the key factors and the uncertainty involved.</li>
            <li><strong>Information Gathering:</strong> Explain what steps you took to gather the available information (e.g., consulting with others, reviewing existing data, making assumptions based on experience).</li>
            <li><strong>Analysis of Options:</strong> Describe the different options you considered and the potential risks and benefits associated with each, given the limited information.</li>
            <li><strong>Decision-Making Process:</strong> Explain how you weighed the options and made your final decision. What criteria did you use? Did you prioritize certain factors? Did you involve others in the decision?</li>
            <li><strong>Outcome:</strong> Describe the result of your decision. What did you learn from this experience about making decisions with incomplete information? Would you approach a similar situation differently in the future?</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Analytical skills, Problem-solving, Risk assessment, Decisiveness, Collaboration, Learning from experience.</p>
    `
  },
  {
    "question": "How do you handle failure or setbacks? Describe a time you faced a significant failure.",
    "description": "This question assesses your resilience, learning ability, and attitude towards mistakes.",
    "hint": "Choose a genuine failure. Focus on your reaction, the steps you took to understand what went wrong, and what you learned from the experience.",
    "answer": `
        <p><strong>Sample Answer Structure (Focus on Resilience and Learning):</strong></p>
        <ol>
            <li><strong>Situation:</strong> Describe the situation and the specific failure or setback you experienced. Be honest about your role in it.</li>
            <li><strong>Initial Reaction:</strong> Briefly describe your initial feelings or thoughts about the failure.</li>
            <li><strong>Analysis of the Failure:</strong> Explain the steps you took to understand why you failed. This might include:
                <ul>
                    <li>Reflecting on your actions and decisions.</li>
                    <li>Seeking feedback from others.</li>
                    <li>Analyzing the process or circumstances that led to the failure.</li>
                </ul>
            <li><strong>Lessons Learned and Actions Taken:</strong> Describe what you learned from the experience and what steps you took to prevent similar failures in the future. This demonstrates your ability to learn and grow.</li>
            <li><strong>Outcome:</strong> Describe the final outcome after you implemented the changes or learned from the failure. Emphasize the positive impact of the experience on your growth and future approach.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Self-awareness, Responsibility, Learning agility, Positive attitude, Resilience, Problem-solving.</p>
    `
  }
          
    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});