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
    get socialSecurityQuestions() { $('#social-security-field') }
    get maritalStatusSingle() { return $('#single') }
    get martialStatusMarried() { return $('#married') }
    get socialSecurityOverride() { return $('#social-security-override') }
    get socialSecurityField() { return $('.social-security-field') }
    get submitButton() { return $('[data-tag-id=submit]') }
    get clearForm() { return $('*=Clear form') }
    get calculatorInputAlert() { return $('#calculator-input-alert') }

    open(){
        return super.open();
    }
    
    clickClearForm(){
        this.clearForm.click()
    }
}

export default new retirementCalculator()