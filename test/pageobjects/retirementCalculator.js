import Page from './page'

class retirementCalculator extends Page {
    get currentAge() { return $('#current-age') }
    get retirementAge() { return $('#retirement-age') }
    get currentIncome() { return $('#current-income') }
    get spouseIncome() { return $('#spouse-income') }
    get currentTotalSavings() { return $('#current-total-savings') }
    get currentAnnualSavings() { return $('#current-annual-savings') }
    get savingsIncreaseRate() { return $('#savings-increase-rate') }
    get yesSocialBenefits() { return $('#yes-social-benefits') }
    get noSocialBenefits() { return $('#no-social-benefits') }
    get yesSocialRadio() { return $('[for=yes-social-benefits]') }
    get noSocialRadio() { return $('[for=no-social-benefits')}
    get maritalStatusSingle() { return $('[for=single]') }
    get martialStatusMarried() { return $('[for=married]') }
    get maritalStatusGroup() { return $('[id=marital-status-toggle-group]') }
    get socialSecurityOverride() { return $('#social-security-override') }
    get socialSecurityField() { return $('[class*=social-security-field]') }
    get submitButton() { return $('[data-tag-id=submit]') }
    get clearForm() { return $('*=Clear form') }
    get calculatorInputAlert() { return $('#calculator-input-alert') }
    get results() { return $('[id=calculator-results-container]')}

    open(){
        return super.open();
    }

    close(){
        return super.close();
    }
    
    clickClearForm(){
        this.clearForm.click()
    }

    waitForSocialSecurityFieldToBeVisible(){
        browser.waitUntil( () => {
            return this.socialSecurityField.getAttribute('display') === null
        }, 4000, 'social security field was not visible after timeout')
    }

    waitForSocialSecurityFieldToBeHidden(){
        browser.waitUntil( () => {
            this.maritalStatusGroup.getAttribute('display') === 'none', {
                timeout:4000,
                timeoutMsg: 'waited for it to be hidden'
            }
        })
    }

    waitForMaritalMarriedYesToBeEnabled(){
        browser.waitUntil( () => {
            return this.martialStatusMarried.isEnabled() === true
        })
    }
}

export default new retirementCalculator()