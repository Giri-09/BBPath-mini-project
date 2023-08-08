
import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const TestCaseDesign = () => (
    <Fragment>
      <CustomNavbar />
      <div className='st-bg'>
        <h2 className='mb-3'>Test Case Design</h2>
        <h4><span className="fw-semibold">Test Case Design: A Comprehensive Approach to Quality Assurance</span></h4>
    <p>
        Test case design is a crucial aspect of the software testing process that ensures the systematic and comprehensive evaluation of software applications. It is a critical phase in quality assurance, aimed at identifying defects and verifying that the software meets its intended functionality, performance, and user experience. Test case design involves the creation of detailed test cases based on various scenarios to assess the software's behavior under different conditions.
    </p>
    <h3><span className="fw-semibold">Importance of Test Case Design:</span></h3>
    <ul>
        <li><span className="fw-semibold">Complete Test Coverage:</span> Test case design ensures that all aspects of the software, including different functionalities, user interactions, and boundary conditions, are thoroughly tested. Comprehensive test coverage helps identify both expected and unexpected behaviors, enhancing the overall quality of the software.</li>
        <li><span className="fw-semibold">Requirement Validation:</span> Test cases are designed based on the software requirements, making it an essential process to validate whether the software aligns with the specified expectations and user needs.</li>
        <li><span className="fw-semibold">Bugs and Defect Identification:</span> Well-designed test cases help in early detection and reporting of defects, allowing developers to fix issues in the early stages of development, reducing rework and cost.</li>
        <li><span className="fw-semibold">Validation of Business Processes:</span> In applications that involve complex business processes, test case design ensures that these processes function correctly, supporting efficient and error-free operations.</li>
        <li><span className="fw-semibold">User Experience Testing:</span> Test case design includes scenarios that evaluate the user experience, ensuring that the software is intuitive, user-friendly, and meets user expectations.</li>
        <li><span className="fw-semibold">Performance Assessment:</span> Test cases are designed to assess the software's performance, such as response times, load handling, and scalability, under various conditions.</li>
        <li><span className="fw-semibold">Regulatory Compliance:</span> In industries with strict regulations, test case design helps ensure that the software adheres to compliance standards, avoiding legal and financial repercussions.</li>
    </ul>
    <h3><span className="fw-semibold">Components of Effective Test Case Design:</span></h3>
    <ul>
        <li><span className="fw-semibold">Test Case Identification:</span> Each test case should have a unique identifier, making it easy to track and reference during testing and defect management.</li>
        <li><span className="fw-semibold">Test Objective:</span> A clear and concise objective must be stated for each test case, defining what aspect of the software will be tested.</li>
        <li><span className="fw-semibold">Preconditions and Test Data:</span> Test case design should specify any preconditions required for the test to be executed and the test data needed to run the test scenario effectively.</li>
        <li><span className="fw-semibold">Test Steps:</span> A step-by-step sequence of actions that testers should follow to execute the test case accurately.</li>
        <li><span className="fw-semibold">Expected Results:</span> Expected results should be defined for each test case, indicating the desired outcome when the test is executed successfully.</li>
        <li><span className="fw-semibold">Actual Results:</span> During test execution, testers record the actual results observed for each test case, comparing them to the expected results.</li>
        <li><span className="fw-semibold">Pass/Fail Criteria:</span> Test case design should include pass/fail criteria to determine whether the test case is successful or not. These criteria are based on the comparison between actual and expected results.</li>
    </ul>
    <h3><span className="fw-semibold">Test Case Design Techniques:</span></h3>
    <ul>
        <li><span className="fw-semibold">Equivalence Partitioning:</span> This technique divides the input data into groups, where each group represents a range of equivalent values. Only one test case is designed for each group, reducing redundant test cases.</li>
        <li><span className="fw-semibold">Boundary Value Analysis:</span> Boundary value analysis focuses on testing scenarios at the edges or boundaries of input ranges, as these are more likely to contain defects.</li>
        <li><span className="fw-semibold">Decision Table Testing:</span> Decision tables help capture complex business rules and conditions, enabling testers to create test cases for various combinations of inputs and outputs.</li>
        <li><span className="fw-semibold">State Transition Testing:</span> This technique is useful for testing applications with different states and transitions. Test cases are designed to evaluate the software's behavior as it moves between states.</li>
        <li><span className="fw-semibold">Error Guessing:</span> Based on tester's experience and intuition, this technique involves designing test cases that target areas where defects are likely to occur.</li>
    </ul>
    <h3><span className="fw-semibold">Test Case Design Best Practices:</span></h3>
    <ul>
        <li><span className="fw-semibold">Clear and Concise Language:</span> Test case design should use clear and simple language to avoid ambiguity and ensure that anyone can understand and execute the test case.</li>
        <li><span className="fw-semibold">Modularity:</span> Test cases should be modular, focusing on specific functionalities or features. This makes test maintenance and execution more manageable.</li>
        <li><span className="fw-semibold">Reusability:</span> Test cases can be designed in a reusable manner, enabling them to be leveraged in different testing cycles or similar scenarios.</li>
        <li><span className="fw-semibold">Prioritization:</span> Test cases should be prioritized based on their importance, risk impact, and the criticality of the functionality they cover.</li>
        <li><span className="fw-semibold">Traceability:</span> Test cases should be linked to requirements, enabling traceability between the tests and the software's intended functionality.</li>
        <li><span className="fw-semibold">Version Control:</span> Test cases should be managed using version control systems to track changes and maintain a history of modifications.</li>
    </ul>
    <h3>We Need to Write Test Scenarios Before Test Case Design</h3>
    <p>
        Writing test scenarios before test case design is a crucial practice in the software testing process. 
        Test scenarios define the specific conditions and situations that need to be tested, providing a clear 
        understanding of the testing scope. By defining test scenarios first, testers can ensure comprehensive 
        test coverage and effectively design test cases that address all possible scenarios, leading to more 
        accurate and efficient testing. Additionally, test scenarios act as a foundation for creating detailed 
        and purposeful test cases, making the entire testing process more structured and systematic.
    </p>
    <h3>Test Scenarios for Test Cases</h3>
    <h4>Test Scenarios for Test Case 1 (TC001): Login Functionality</h4>
    <p><span class="fw-semibold">Test Objective:</span> To verify the login functionality of the application.</p>
    
    <h4>Test Scenarios:</h4>
    <ol>
        <li>
            <span class="fw-semibold">Valid Credentials - Successful Login:</span>
            <ul>
                <li>
                    Preconditions:
                    <ul>
                        <li>The application is installed and accessible.</li>
                        <li>Valid user credentials (username and password) are available for testing.</li>
                    </ul>
                </li>
                <li>Test Steps:
                    <ol>
                        <li>Launch the application.</li>
                        <li>Enter valid username and password in the login fields.</li>
                        <li>Click on the "Login" button.</li>
                    </ol>
                </li>
                <li>Expected Results:
                    <ul>
                        <li>The application should navigate to the user's dashboard upon successful login.</li>
                    </ul>
                </li>
                <li>Pass/Fail Criteria:
                    <ul>
                        <li>The test case passes if the user successfully logs in and is redirected to the dashboard.</li>
                        <li>The test case fails if the application allows login with incorrect credentials or displays incorrect error messages.</li>
                    </ul>
                </li>
            </ul>
        </li>
        
        <li>
            <span class="fw-semibold">Invalid Credentials - Error Message:</span>
            <ul>
                <li>
                    Preconditions:
                    <ul>
                        <li>The application is installed and accessible.</li>
                        <li>Invalid user credentials (username and/or password) are available for testing.</li>
                    </ul>
                </li>
                <li>Test Steps:
                    <ol>
                        <li>Launch the application.</li>
                        <li>Enter invalid username and/or password in the login fields.</li>
                        <li>Click on the "Login" button.</li>
                    </ol>
                </li>
                <li>Expected Results:
                    <ul>
                        <li>An error message should be displayed indicating that the login credentials are incorrect.</li>
                    </ul>
                </li>
                <li>Pass/Fail Criteria:
                    <ul>
                        <li>The test case passes if the application displays an appropriate error message for invalid credentials.</li>
                        <li>The test case fails if the application allows login with invalid credentials or does not show any error message.</li>
                    </ul>
                </li>
            </ul>
        </li>
        
        <li>
            <span class="fw-semibold">Empty Credentials - Login Disabled:</span>
            <ul>
                <li>
                    Preconditions:
                    <ul>
                        <li>The application is installed and accessible.</li>
                    </ul>
                </li>
                <li>Test Steps:
                    <ol>
                        <li>Launch the application.</li>
                        <li>Leave the username and password fields empty.</li>
                        <li>Attempt to click on the "Login" button.</li>
                    </ol>
                </li>
                <li>Expected Results:
                    <ul>
                        <li>The user should not be able to proceed to the dashboard without entering valid credentials.</li>
                    </ul>
                </li>
                <li>Pass/Fail Criteria:
                    <ul>
                        <li>The test case passes if the "Login" button is disabled when the fields are empty, preventing the user from logging in.</li>
                        <li>The test case fails if the "Login" button is enabled or allows login with empty credentials.</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>

    <h4>Test Scenarios for Test Case 2 (TC002): Boundary Value Analysis</h4>
    <p><span class="fw-semibold">Test Objective:</span> To verify the correct behavior of a text input field with a specified character limit.</p>

    <h4>Test Scenarios:</h4>
    <ol>
        <li>
            <span class="fw-semibold">Text Input Within Character Limit:</span>
            <ul>
                <li>
                    Preconditions:
                    <ul>
                        <li>The application is installed and accessible.</li>
                        <li>The text input field is available for testing.</li>
                    </ul>
                </li>
                <li>Test Steps:
                    <ol>
                        <li>Enter text within the allowed character limit (e.g., 150 characters).</li>
                    </ol>
                </li>
                <li>Expected Results:
                    <ul>
                        <li>The application should accept the text input within the allowed character limit without any issues.</li>
                    </ul>
                </li>
                <li>Pass/Fail Criteria:
                    <ul>
                        <li>The test case passes if the application correctly accepts the text within the character limit.</li>
                        <li>The test case fails if the application displays any error messages or rejects valid text within the limit.</li>
                    </ul>
                </li>
            </ul>
        </li>

        <li>
            <span class="fw-semibold">Text Input Beyond Character Limit:</span>
            <ul>
                <li>
                    Preconditions:
                    <ul>
                        <li>The application is installed and accessible.</li>
                        <li>The text input field is available for testing.</li>
                    </ul>
                </li>
                <li>Test Steps:
                    <ol>
                        <li>Enter text beyond the allowed character limit.</li>
                    </ol>
                </li>
                <li>Expected Results:
                    <ul>
                        <li>The application should display an error message indicating that the text has exceeded the character limit.</li>
                    </ul>
                </li>
                <li>Pass/Fail Criteria:
                    <ul>
                        <li>The test case passes if the application shows the appropriate error message for text exceeding the limit.</li>
                        <li>The test case fails if the application accepts text beyond the character limit or does not display any error messages.</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>
    <h3>Test case examples</h3>
    <br />
    <table>
        <tr>
            <th>Test Case ID</th>
            <th>Test Objective</th>
            <th>Preconditions</th>
            <th>Test Steps</th>
            <th>Expected Results</th>
            <th>Pass/Fail Criteria</th>
        </tr>
        <tr>
            <td>TC001</td>
            <td>To verify the login functionality of the application.</td>
            <td>
                <ul>
                    <li>The application is installed and accessible.</li>
                    <li>User credentials (username and password) are available for testing.</li>
                </ul>
            </td>
            <td>
                <ol>
                    <li>Launch the application.</li>
                    <li>Enter valid username and password in the login fields.</li>
                    <li>Click on the "Login" button.</li>
                </ol>
            </td>
            <td>
                <ul>
                    <li>The application should navigate to the user's dashboard upon successful login.</li>
                    <li>An error message should be displayed if invalid credentials are entered.</li>
                    <li>The user should not be able to proceed to the dashboard without entering valid credentials.</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>The test case passes if the user successfully logs in and is redirected to the dashboard.</li>
                    <li>The test case fails if the application allows login with incorrect credentials or displays incorrect error messages.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>TC002</td>
            <td>To verify the correct behavior of a text input field with a specified character limit.</td>
            <td>
                <ul>
                    <li>The application is installed and accessible.</li>
                    <li>The text input field is available for testing.</li>
                </ul>
            </td>
            <td>
                <ol>
                    <li>Enter text within the allowed character limit (e.g., 150 characters).</li>
                </ol>
            </td>
            <td>
                <ul>
                    <li>The application should accept the text input within the allowed character limit.</li>
                    <li>The application should display an error message if the user attempts to enter text beyond the character limit.</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>The test case passes if the application behaves as expected, accepting the text within the character limit and displaying appropriate error messages when exceeding the limit.</li>
                    <li>The test case fails if the application allows text entry beyond the character limit without displaying any error messages.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>TC003</td>
            <td>To verify the calculation functionality of a calculator application for different inputs.</td>
            <td>
                <ul>
                    <li>The calculator application is installed and accessible.</li>
                    <li>The application supports basic arithmetic operations (addition, subtraction, multiplication, and division).</li>
                </ul>
            </td>
            <td>
                <ol>
                    <li>Enter different combinations of two operands and an operator (e.g., 5 + 3, 10 - 2, 4 * 6, 12 / 3).</li>
                    <li>Click on the "Calculate" or "=" button.</li>
                </ol>
            </td>
            <td>
                <ul>
                    <li>The application should perform the arithmetic operation correctly and display the accurate result on the calculator screen for each test case.</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>The test case passes if the application provides the correct result for each arithmetic operation.</li>
                    <li>The test case fails if the application returns incorrect results for any of the test cases.</li>
                </ul>
            </td>
        </tr>
    </table>

      </div>
  
      <Footer />
    </Fragment>
  );

  export default TestCaseDesign