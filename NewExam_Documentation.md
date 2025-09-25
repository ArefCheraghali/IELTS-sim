# NewExam Component - Documentation

## Overview
The NewExam component is a comprehensive form for creating IELTS exam answer keys with support for multiple correct answers per question.

## Features

### ✅ **Multi-Tab Interface**
- **Exam Info Tab**: Basic exam information
- **Listening Answers Tab**: 40 questions with multiple answer support
- **Reading Answers Tab**: 40 questions with multiple answer support
- Visual indicators show answer count per section

### ✅ **Answer Management**
- **Multiple answers per question**: Each question supports an array of correct answers
- **Add/Remove answers**: Individual chip-based interface for each question
- **Bulk import**: Paste all answers at once using `|` separator for multiple answers
- **Case-insensitive duplicate prevention**
- **Clear individual questions or all answers**

### ✅ **Data Structure**
```javascript
// Example request body format:
{
  "exam_name": "IELTS Practice Test 1",
  "exam_type": "academic", // or "general"
  "test_version": "test1ac",
  "listening_answers": [
    ["answer1"], // Question 1: single answer
    ["answer1", "answer2"], // Question 2: multiple answers
    [], // Question 3: no answer set yet
    ["short answer", "longer answer"], // Question 4: multiple valid answers
    // ... 36 more questions
  ],
  "reading_answers": [
    // Same structure as listening_answers
    // 40 questions total
  ]
}
```

### ✅ **Validation**
- Form validation using Yup schema
- Required fields: exam_name, exam_type, test_version
- At least one section must have answers before submission
- Environment variable validation for API endpoint

### ✅ **User Experience**
- Loading states with progress indicators
- Success/error notifications
- Responsive design for mobile and desktop
- Keyboard support (Enter to add answers)
- Clear visual feedback for completed questions

## Usage Instructions

### 1. **Basic Setup**
Navigate to Admin Panel → Exam Management → New Exam

### 2. **Fill Exam Information**
- **Exam Name**: Descriptive name (e.g., "IELTS Practice Test 1")
- **Exam Type**: Select "Academic" or "General Training"  
- **Test Version**: Version identifier (e.g., "test1ac", "test2ge")

### 3. **Add Listening Answers**
- Click "Listening Answers" tab
- For each question (Q1-Q40):
  - Type answer in the text field
  - Press Enter or click + to add
  - Add multiple correct answers if needed
  - Click X on chips to remove answers
  - Use trash icon to clear all answers for a question

### 4. **Add Reading Answers**
- Click "Reading Answers" tab
- Same process as Listening section
- 40 questions total

### 5. **Bulk Import (Advanced)**
- Click "Bulk Import" button on any tab
- Paste answers one per line
- Use `|` to separate multiple answers for same question
- Example:
```
theatre
7:30|7.30|seven thirty
circle
J14
```

### 6. **Submit**
- Review all sections (chips show answer count)
- Click "Create Exam" to submit
- Wait for success confirmation

## Technical Implementation

### **State Management**
```javascript
const [listeningAnswers, setListeningAnswers] = useState(
  Array(40).fill().map(() => []) // 40 empty arrays
);
const [readingAnswers, setReadingAnswers] = useState(
  Array(40).fill().map(() => []) // 40 empty arrays
);
```

### **API Integration**
- **Endpoint**: `POST /admin/create-exam`
- **Authentication**: Bearer token from localStorage
- **Headers**: `Content-Type: application/json`

### **Error Handling**
- Network errors with user-friendly messages
- Form validation errors
- API response error handling
- Environment variable validation

## Benefits for IELTS Assessment

### **Flexible Answer Matching**
- Supports variations in spelling
- Multiple acceptable formats for numbers/times
- Alternative wordings for same concept

### **Example Use Cases**
- **Time questions**: ["7:30", "7.30", "seven thirty"]
- **Names**: ["theatre", "theater"] 
- **Numbers**: ["14", "fourteen", "J14"]
- **Synonyms**: ["happy", "pleased", "content"]

### **Automated Scoring**
When students submit answers, the system can:
1. Check against all acceptable answers for each question
2. Award points for any matching answer
3. Generate accurate scores automatically
4. Provide detailed feedback on correct/incorrect responses

## Navigation Integration
- Accessible via Admin Panel → Exam Management → "New Exam" button
- Also available at direct route: `/admin/new-exam`
- Integrated with existing admin authentication and routing

This component significantly enhances the IELTS testing platform by enabling flexible, comprehensive answer key management for accurate automated assessment.
