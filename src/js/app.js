import { secretButton, secretParagraph} from './demo-loader';

var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton();
}


function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = "Hide Secrete";
    }else {
        secretButton.textContent = "Show the secret";
    }
}

function updateSecretParagraph() {
    if(showSecret) {
        secretParagraph.style.display = 'block';
    }else {
        secretParagraph.style.display = 'none';
    }
}