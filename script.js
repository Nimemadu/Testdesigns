document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('ceymulticall-button');

    button.addEventListener('click', function () {
        showTooltip(this, 'You clicked the button!');
    });

    function showTooltip(element, message) {
        // Remove existing tooltip if any
        var existingTooltip = document.querySelector('.ceymulticall-tooltip');
        if (existingTooltip) {
            existingTooltip.remove();
        }

        // Create a new tooltip element
        var tooltip = document.createElement('div');
        tooltip.className = 'ceymulticall-tooltip';
        tooltip.textContent = message;

        // Append tooltip to the button
        element.parentElement.appendChild(tooltip);

        // Position the tooltip
        var rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + (element.offsetWidth / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';

        // Automatically remove the tooltip after 3 seconds
        setTimeout(function () {
            tooltip.remove();
        }, 3000);
    }
});
