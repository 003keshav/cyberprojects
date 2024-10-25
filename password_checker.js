document.getElementById("password").addEventListener("input", function() {
    const password = this.value;
    const strengthBar = document.getElementById("strength-bar");
    const feedback = document.getElementById("feedback");
    const suggestions = document.getElementById("suggestions");

    let strength = 0;
    if (password.length > 7) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;

    const strengthPercent = (strength / 5) * 100;
    strengthBar.style.width = strengthPercent + '%';

    let feedbackText = '';
    let suggestionText = '';
    switch (strength) {
        case 1:
            feedbackText = 'Very Weak';
            suggestionText = 'Use more characters and mix of letters.';
            break;
        case 2:
            feedbackText = 'Weak';
            suggestionText = 'Add uppercase, numbers, and symbols.';
            break;
        case 3:
            feedbackText = 'Fair';
            suggestionText = 'Add more special characters.';
            break;
        case 4:
            feedbackText = 'Good';
            suggestionText = 'Strengthen further with symbols.';
            break;
        case 5:
            feedbackText = 'Strong';
            suggestionText = 'Great job!';
            break;
    }
    feedback.textContent = feedbackText;
    suggestions.textContent = suggestionText;
});
