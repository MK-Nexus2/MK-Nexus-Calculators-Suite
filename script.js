/**
 * MK Nexus - Calculators Suite
 * Professional SPA with three utility modules
 * Developed by Muhammad Maqsood © 2025
 * Enhanced Edition with Dark Mode & Advanced Animations
 */

class MKUtilitySuite {
    constructor() {
        this.config = {
            appName: 'MK Nexus Calculators Suite',
            version: '2.0.0',
            developer: 'Muhammad Maqsood',
            year: 2025
        };
        
        this.conversionFactors = new Map();
        this.unitCategories = new Map();
        this.currentTheme = 'light';
        this.calculationHistory = [];
        
        this.init();
    }

    /**
     * Initialize the application with all modules
     */
    init() {
        try {
            this.setupConfiguration();
            this.setupThemeSystem();
            this.setupParticleSystem();
            this.setupTabNavigation();
            this.setupEventListeners();
            this.setupUnitConverter();
            this.setCurrentYear();
            
            // Calculate initial values for better UX
            setTimeout(() => {
                this.calculateCompoundInterest();
                this.calculateFreelancerTime();
                this.convertUnits();
            }, 500);
            
            this.log('Application initialized successfully');
        } catch (error) {
            this.handleError('Initialization failed:', error);
        }
    }

    /**
     * Setup application configuration and constants
     */
    setupConfiguration() {
        // Conversion factors for unit converter
        this.conversionFactors
            .set('meters-feet', 3.28084)
            .set('feet-meters', 0.3048)
            .set('meters-kilometers', 0.001)
            .set('kilometers-meters', 1000)
            .set('feet-inches', 12)
            .set('inches-feet', 0.0833333)
            .set('kilograms-pounds', 2.20462)
            .set('pounds-kilograms', 0.453592)
            .set('kilograms-grams', 1000)
            .set('grams-kilograms', 0.001)
            .set('pounds-ounces', 16)
            .set('ounces-pounds', 0.0625);

        // Unit categories with metadata
        this.unitCategories
            .set('length', [
                { value: 'meters', label: 'Meters', icon: '📏' },
                { value: 'feet', label: 'Feet', icon: '👣' },
                { value: 'kilometers', label: 'Kilometers', icon: '🛣️' },
                { value: 'inches', label: 'Inches', icon: '📐' }
            ])
            .set('weight', [
                { value: 'kilograms', label: 'Kilograms', icon: '⚖️' },
                { value: 'pounds', label: 'Pounds', icon: '🏋️' },
                { value: 'grams', label: 'Grams', icon: '🔬' },
                { value: 'ounces', label: 'Ounces', icon: '🍎' }
            ])
            .set('temperature', [
                { value: 'celsius', label: 'Celsius', icon: '🌡️' },
                { value: 'fahrenheit', label: 'Fahrenheit', icon: '🔥' },
                { value: 'kelvin', label: 'Kelvin', icon: '❄️' }
            ]);
    }

    /**
     * Setup theme system with dark/light mode toggle
     */
    setupThemeSystem() {
        this.currentTheme = localStorage.getItem('mk-nexus-theme') || 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        
        this.createThemeToggle();
        this.setupEnhancedInteractions();
    }

    /**
     * Create and inject theme toggle button
     */
    createThemeToggle() {
        const toggleHTML = `
            <div class="theme-toggle">
                <button class="toggle-btn" aria-label="Toggle theme" title="Switch between dark and light mode">
                    <span class="toggle-icon">${this.currentTheme === 'light' ? '🌙' : '☀️'}</span>
                </button>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', toggleHTML);
        
        document.querySelector('.toggle-btn').addEventListener('click', (e) => {
            this.toggleTheme();
            this.createRippleEffect(e.target);
        });
    }

    /**
     * Toggle between dark and light themes
     */
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('mk-nexus-theme', this.currentTheme);
        
        // Update toggle icon
        const toggleIcon = document.querySelector('.toggle-icon');
        toggleIcon.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
        
        this.log(`Theme changed to: ${this.currentTheme}`);
        this.showToast('Theme updated successfully', 'success');
    }

    /**
     * Setup particle background system
     */
    setupParticleSystem() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        document.body.appendChild(particlesContainer);

        // Create initial particles
        for (let i = 0; i < 12; i++) {
            this.createParticle(particlesContainer, i * 300);
        }

        // Continuous particle generation
        setInterval(() => {
            if (document.querySelectorAll('.particle').length < 15) {
                this.createParticle(particlesContainer);
            }
        }, 2000);
    }

    /**
     * Create individual particle with random properties
     */
    createParticle(container, delay = 0) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 6 + 2;
            const posX = Math.random() * 100;
            const duration = Math.random() * 25 + 15;
            const opacity = Math.random() * 0.1 + 0.05;
            
            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${posX}%;
                opacity: ${opacity};
                animation-duration: ${duration}s;
                animation-delay: ${Math.random() * 3}s;
            `;
            
            container.appendChild(particle);
            
            // Remove particle after animation and create new one
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
                this.createParticle(container);
            }, duration * 1000);
        }, delay);
    }

    /**
     * Setup enhanced user interactions
     */
    setupEnhancedInteractions() {
        // Enhanced hover effects
        const interactiveElements = document.querySelectorAll(
            'button, .card, .tab-btn, .result-item, .form-group input, .form-group select'
        );
        
        interactiveElements.forEach(element => {
            // Ripple effect for clickable elements
            if (element.tagName === 'BUTTON' || element.classList.contains('tab-btn')) {
                element.addEventListener('click', (e) => {
                    this.createRippleEffect(e.currentTarget);
                });
            }
            
            // Enhanced focus states
            element.addEventListener('focus', () => {
                element.classList.add('focused');
            });
            
            element.addEventListener('blur', () => {
                element.classList.remove('focused');
            });
        });

        // Keyboard navigation support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    /**
     * Create ripple effect on element click
     */
    createRippleEffect(element) {
        if (!element || element.classList.contains('disabled')) return;

        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(0, 123, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 600);
    }

    /**
     * Setup tab navigation system
     */
    setupTabNavigation() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active states
                tabButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.transform = 'translateY(0)';
                });
                tabContents.forEach(content => content.classList.remove('active'));

                // Activate clicked tab
                button.classList.add('active');
                button.style.transform = 'translateY(-2px)';

                // Show corresponding content
                const tabId = button.dataset.tab;
                const tabContent = document.getElementById(tabId);
                if (tabContent) {
                    tabContent.classList.add('active');
                }

                this.createRippleEffect(button);
                this.log(`Switched to tab: ${tabId}`);
            });
        });
    }

    /**
     * Setup all event listeners
     */
    setupEventListeners() {
        // Form submissions
        this.attachFormHandler('interest-form', () => this.calculateCompoundInterest());
        this.attachFormHandler('time-form', () => this.calculateFreelancerTime());
        this.attachFormHandler('converter-form', () => this.convertUnits());

        // Dynamic unit options
        document.getElementById('category').addEventListener('change', () => {
            this.updateUnitOptions();
        });

        // Copy buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.copy-btn')) {
                const button = e.target.closest('.copy-btn');
                const targetId = button.dataset.target;
                this.copyToClipboard(targetId);
            }
        });

        // Input validation on blur
        this.setupInputValidation();

        // Real-time calculations for better UX
        this.setupRealTimeCalculations();
    }

    /**
     * Setup real-time calculations for better UX
     */
    setupRealTimeCalculations() {
        // Compound interest real-time updates
        const interestInputs = document.querySelectorAll('#interest-form input, #interest-form select');
        interestInputs.forEach(input => {
            input.addEventListener('input', () => {
                if (this.validateInterestForm()) {
                    setTimeout(() => this.calculateCompoundInterest(), 500);
                }
            });
        });

        // Freelancer time real-time updates
        const timeInputs = document.querySelectorAll('#time-form input');
        timeInputs.forEach(input => {
            input.addEventListener('input', () => {
                if (this.validateTimeForm()) {
                    setTimeout(() => this.calculateFreelancerTime(), 500);
                }
            });
        });

        // Unit converter real-time updates
        const converterInputs = document.querySelectorAll('#converter-form input, #converter-form select');
        converterInputs.forEach(input => {
            input.addEventListener('input', () => {
                if (this.validateConverterForm()) {
                    setTimeout(() => this.convertUnits(), 500);
                }
            });
        });
    }

    /**
     * Attach form submit handler with validation
     */
    attachFormHandler(formId, callback) {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                callback();
            });
        }
    }

    /**
     * Setup real-time input validation
     */
    setupInputValidation() {
        const inputs = document.querySelectorAll('input[type="number"], input[type="time"]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateInput(input);
            });
            
            input.addEventListener('input', () => {
                // Clear error state on input
                input.classList.remove('input-invalid');
                input.classList.add('input-valid');
            });
        });
    }

    /**
     * Validate individual input field
     */
    validateInput(input) {
        const value = input.value.trim();
        
        if (input.hasAttribute('required') && !value) {
            this.highlightError(input, 'This field is required');
            return false;
        }
        
        if (input.type === 'number' && value) {
            const numValue = parseFloat(value);
            if (isNaN(numValue) || numValue < 0) {
                this.highlightError(input, 'Please enter a valid positive number');
                return false;
            }
        }
        
        // Clear error state
        input.classList.remove('input-invalid');
        input.classList.add('input-valid');
        return true;
    }

    /**
     * Highlight input field with error
     */
    highlightError(input, message) {
        input.classList.remove('input-valid');
        input.classList.add('input-invalid');
        input.title = message;
        
        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'error-tooltip';
        tooltip.textContent = message;
        tooltip.style.cssText = `
            position: absolute;
            background: var(--error-color);
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 0.8rem;
            z-index: 1000;
            top: 100%;
            left: 0;
            margin-top: 5px;
        `;
        
        input.parentNode.style.position = 'relative';
        input.parentNode.appendChild(tooltip);
        
        setTimeout(() => tooltip.remove(), 3000);
    }

    /**
     * MODULE A: Compound Interest Calculator
     */
    calculateCompoundInterest() {
        try {
            const principal = this.getInputValue('principal');
            const interestRate = this.getInputValue('interest-rate');
            const time = this.getInputValue('time');
            const frequency = this.getInputValue('frequency', true);

            if (!this.validateInputs([principal, interestRate, time], ['principal', 'interest-rate', 'time'])) {
                this.showError('interest-result', 'Please check your inputs and ensure all values are valid positive numbers.');
                return;
            }

            const rateDecimal = interestRate / 100;
            const amount = principal * Math.pow(1 + rateDecimal / frequency, frequency * time);
            const interestEarned = amount - principal;

            this.displayInterestResults(principal, amount, interestEarned);

            // Add to history
            this.addToHistory({
                type: 'compound_interest',
                principal,
                interestRate,
                time,
                frequency,
                amount,
                interestEarned,
                timestamp: new Date()
            });

        } catch (error) {
            this.handleError('Compound interest calculation failed:', error);
            this.showError('interest-result', 'An unexpected error occurred. Please try again.');
        }
    }

    /**
     * Validate compound interest form
     */
    validateInterestForm() {
        const principal = this.getInputValue('principal');
        const interestRate = this.getInputValue('interest-rate');
        const time = this.getInputValue('time');
        
        return this.validateInputs([principal, interestRate, time], ['principal', 'interest-rate', 'time']);
    }

    /**
     * Display compound interest results
     */
    displayInterestResults(principal, amount, interestEarned) {
        const elements = {
            principal: 'principal-display',
            total: 'total-amount',
            interest: 'interest-earned'
        };

        Object.entries(elements).forEach(([key, id]) => {
            const value = key === 'principal' ? principal : key === 'total' ? amount : interestEarned;
            document.getElementById(id).textContent = this.formatCurrency(value);
        });

        this.showResult('interest-result');
        this.log('Compound interest calculated successfully');
    }

    /**
     * MODULE B: Freelancer Time Calculator
     */
    calculateFreelancerTime() {
        try {
            const startTime = document.getElementById('start-time').value;
            const endTime = document.getElementById('end-time').value;
            const hourlyRate = this.getInputValue('hourly-rate');
            const breakMinutes = this.getInputValue('break-minutes') || 0;

            if (!startTime || !endTime || !hourlyRate || hourlyRate <= 0) {
                this.showError('time-result', 'Please provide valid times and a positive hourly rate.');
                return;
            }

            const totalHours = this.calculateTimeDifference(startTime, endTime);
            
            if (totalHours <= 0) {
                this.showError('time-result', 'End time must be after start time.');
                return;
            }

            const breakHours = breakMinutes / 60;
            const billableHours = Math.max(0, totalHours - breakHours);
            const totalAmount = billableHours * hourlyRate;

            this.displayTimeResults(totalHours, breakHours, billableHours, totalAmount);

            // Add to history
            this.addToHistory({
                type: 'freelancer_time',
                startTime,
                endTime,
                hourlyRate,
                breakMinutes,
                totalHours,
                billableHours,
                totalAmount,
                timestamp: new Date()
            });

        } catch (error) {
            this.handleError('Freelancer time calculation failed:', error);
            this.showError('time-result', 'Unable to calculate time. Please check your inputs.');
        }
    }

    /**
     * Validate freelancer time form
     */
    validateTimeForm() {
        const startTime = document.getElementById('start-time').value;
        const endTime = document.getElementById('end-time').value;
        const hourlyRate = this.getInputValue('hourly-rate');
        
        return startTime && endTime && hourlyRate && hourlyRate > 0;
    }

    /**
     * Calculate time difference in hours
     */
    calculateTimeDifference(startTime, endTime) {
        const start = new Date(`2000-01-01T${startTime}`);
        let end = new Date(`2000-01-01T${endTime}`);

        if (end < start) {
            end.setDate(end.getDate() + 1);
        }

        return (end - start) / (1000 * 60 * 60);
    }

    /**
     * Display freelancer time results
     */
    displayTimeResults(totalHours, breakHours, billableHours, totalAmount) {
        const elements = {
            'total-hours': totalHours.toFixed(2),
            'break-display': `${breakHours.toFixed(2)} hrs`,
            'billable-hours': billableHours.toFixed(2),
            'total-bill': this.formatCurrency(totalAmount)
        };

        Object.entries(elements).forEach(([id, value]) => {
            document.getElementById(id).textContent = value;
        });

        this.showResult('time-result');
        this.log('Freelancer time calculated successfully');
    }

    /**
     * MODULE C: Smart Unit Converter
     */
    setupUnitConverter() {
        this.updateUnitOptions();
    }

    /**
     * Validate unit converter form
     */
    validateConverterForm() {
        const value = this.getInputValue('value');
        const fromUnit = document.getElementById('from-unit').value;
        const toUnit = document.getElementById('to-unit').value;
        
        return value !== null && fromUnit && toUnit;
    }

    /**
     * Update unit options based on selected category
     */
    updateUnitOptions() {
        const category = document.getElementById('category').value;
        const fromUnit = document.getElementById('from-unit');
        const toUnit = document.getElementById('to-unit');
        const convertBtn = document.getElementById('convert-btn');

        // Reset options
        [fromUnit, toUnit].forEach(select => {
            select.innerHTML = '';
        });

        if (category && this.unitCategories.has(category)) {
            const units = this.unitCategories.get(category);
            
            units.forEach(unit => {
                [fromUnit, toUnit].forEach(select => {
                    const option = new Option(`${unit.icon} ${unit.label}`, unit.value);
                    select.add(option);
                });
            });

            // Set default values
            fromUnit.value = units[0].value;
            toUnit.value = units[1] ? units[1].value : units[0].value;

            // Enable controls
            [fromUnit, toUnit, convertBtn].forEach(el => {
                el.disabled = false;
            });
        } else {
            // Disable controls
            [fromUnit, toUnit, convertBtn].forEach(el => {
                el.disabled = true;
            });
        }
    }

    /**
     * Convert units based on user input
     */
    convertUnits() {
        try {
            const value = this.getInputValue('value');
            const fromUnit = document.getElementById('from-unit').value;
            const toUnit = document.getElementById('to-unit').value;

            if (!this.validateInputs([value], ['value']) || !fromUnit || !toUnit) {
                this.showError('converter-result', 'Please provide a valid value and select both units.');
                return;
            }

            const convertedValue = fromUnit === toUnit 
                ? value 
                : this.performConversion(value, fromUnit, toUnit);

            this.displayConverterResult(value, fromUnit, convertedValue, toUnit);

            // Add to history
            this.addToHistory({
                type: 'unit_conversion',
                value,
                fromUnit,
                toUnit,
                convertedValue,
                timestamp: new Date()
            });

        } catch (error) {
            this.handleError('Unit conversion failed:', error);
            this.showError('converter-result', 'Conversion error. Please check your inputs.');
        }
    }

    /**
     * Perform unit conversion calculation
     */
    performConversion(value, fromUnit, toUnit) {
        const conversionKey = `${fromUnit}-${toUnit}`;
        
        // Temperature conversions
        const tempConversions = {
            'celsius-fahrenheit': (c) => (c * 9/5) + 32,
            'fahrenheit-celsius': (f) => (f - 32) * 5/9,
            'celsius-kelvin': (c) => c + 273.15,
            'kelvin-celsius': (k) => k - 273.15,
            'fahrenheit-kelvin': (f) => (f - 32) * 5/9 + 273.15,
            'kelvin-fahrenheit': (k) => (k - 273.15) * 9/5 + 32
        };

        if (tempConversions[conversionKey]) {
            return tempConversions[conversionKey](value);
        }

        // Standard conversions
        if (this.conversionFactors.has(conversionKey)) {
            return value * this.conversionFactors.get(conversionKey);
        }

        throw new Error(`Unsupported conversion: ${fromUnit} to ${toUnit}`);
    }

    /**
     * Display unit conversion result
     */
    displayConverterResult(originalValue, fromUnit, convertedValue, toUnit) {
        const elements = {
            'original-value': originalValue,
            'from-unit-display': fromUnit,
            'converted-value': convertedValue.toFixed(6),
            'to-unit-display': toUnit
        };

        Object.entries(elements).forEach(([id, value]) => {
            document.getElementById(id).textContent = value;
        });

        this.showResult('converter-result');
        this.log(`Unit conversion: ${originalValue} ${fromUnit} → ${convertedValue.toFixed(2)} ${toUnit}`);
    }

    /**
     * UTILITY METHODS
     */

    /**
     * Get and parse input value
     */
    getInputValue(id, isInt = false) {
        const element = document.getElementById(id);
        if (!element) return null;
        
        const value = element.value.trim();
        return value === '' ? null : (isInt ? parseInt(value) : parseFloat(value));
    }

    /**
     * Validate multiple inputs
     */
    validateInputs(inputs, fieldIds = []) {
        const isValid = inputs.every((input, index) => {
            const valid = input !== null && !isNaN(input) && isFinite(input) && input >= 0;
            
            // Visual feedback
            if (fieldIds[index]) {
                const field = document.getElementById(fieldIds[index]);
                if (field) {
                    field.classList.toggle('input-invalid', !valid);
                    field.classList.toggle('input-valid', valid);
                }
            }
            
            return valid;
        });
        
        return isValid;
    }

    /**
     * Show result section with animation
     */
    showResult(resultElementId) {
        const resultDiv = document.getElementById(resultElementId);
        if (resultDiv) {
            resultDiv.classList.remove('hidden');
            resultDiv.style.animation = 'slideInFromRight 0.6s ease-out';
        }
    }

    /**
     * Show error message in result section
     */
    showError(resultElementId, message) {
        const resultDiv = document.getElementById(resultElementId);
        if (resultDiv) {
            resultDiv.innerHTML = `
                <div class="result-item large error-message">
                    <span class="error-icon">⚠️</span>
                    <span>${message}</span>
                </div>
            `;
            resultDiv.classList.remove('hidden');
        }
    }

    /**
     * Format currency value
     */
    formatCurrency(value) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    }

    /**
     * Copy content to clipboard
     */
    copyToClipboard(targetId) {
        try {
            const targetElement = document.getElementById(targetId);
            if (!targetElement) return;

            const textToCopy = targetElement.textContent || targetElement.innerText;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                const button = document.querySelector(`[data-target="${targetId}"]`);
                if (button) {
                    const originalHTML = button.innerHTML;
                    button.innerHTML = '<span class="copy-icon">✓</span>';
                    button.classList.add('copied');
                    
                    setTimeout(() => {
                        button.innerHTML = originalHTML;
                        button.classList.remove('copied');
                    }, 2000);
                }
                
                this.showToast('Copied to clipboard!', 'success');
                this.log('Content copied to clipboard');
            }).catch(err => {
                this.handleError('Failed to copy to clipboard:', err);
                this.showToast('Failed to copy to clipboard', 'error');
            });
        } catch (error) {
            this.handleError('Clipboard error:', error);
            this.showToast('Clipboard not supported', 'error');
        }
    }

    /**
     * Show toast notification
     */
    showToast(message, type = 'info') {
        // Remove existing toasts
        document.querySelectorAll('.toast').forEach(toast => toast.remove());
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Show toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        // Hide toast after delay
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }, 3000);
    }

    /**
     * Add calculation to history
     */
    addToHistory(calculation) {
        this.calculationHistory.unshift(calculation);
        
        // Keep only last 10 calculations
        if (this.calculationHistory.length > 10) {
            this.calculationHistory = this.calculationHistory.slice(0, 10);
        }
        
        this.log('Calculation added to history');
    }

    /**
     * Set current year in footer
     */
    setCurrentYear() {
        document.querySelectorAll('.year').forEach(element => {
            element.textContent = `© ${new Date().getFullYear()}`;
        });
    }

    /**
     * Log messages with app prefix
     */
    log(message) {
        console.log(`[${this.config.appName}] ${message}`);
    }

    /**
     * Handle errors consistently
     */
    handleError(context, error) {
        console.error(`[${this.config.appName}] ${context}`, error);
    }
}

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new MKUtilitySuite();
});

// Add global styles for enhanced interactions
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .keyboard-navigation *:focus {
        outline: 2px solid var(--primary-color) !important;
        outline-offset: 2px !important;
    }
    
    .error-message {
        color: var(--error-color) !important;
        animation: pulse 2s ease-in-out infinite;
    }
    
    .error-icon {
        font-size: 1.5rem;
        margin-right: 0.5rem;
    }
    
    .focused {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
    }
`;
document.head.appendChild(enhancedStyles);