import retirementCalcPage from '../pageobjects/retirementCalculator.js'

describe('Clear form button clears the form', () =>{
    it('should clear the page when the Clear Form link is clicked', () => {
        retirementCalcPage.open()
        retirementCalcPage.currentAge.setValue('30')
        retirementCalcPage.clickClearForm()
        expect(retirementCalcPage.currentAge.getValue()).toBe("")
    })
})

describe('Error when no input in fields', () =>{
    it('should display an error when submitting without any input entered in any fields', () => {
        retirementCalcPage.open()
        retirementCalcPage.submitButton.click()
        expect(retirementCalcPage.calculatorInputAlert).toBeDisplayed()
    })
})

describe('Social Security fields are hidden or displayed when option selected', () => {
    it('should be hidden or displayed when option is selected', () => {
        retirementCalcPage.open()
        expect(retirementCalcPage.noSocialBenefits.isSelected()).toBe(true)
        expect(retirementCalcPage.yesSocialBenefits.isSelected()).toBe(false)
        expect(retirementCalcPage.socialSecurityField.isDisplayed()).toBe(false)
        retirementCalcPage.yesSocialRadio.click()
        expect(retirementCalcPage.noSocialBenefits.isSelected()).toBe(false)
        expect(retirementCalcPage.yesSocialBenefits.isSelected()).toBe(true)
        expect(retirementCalcPage.socialSecurityField.isDisplayed()).toBe(true)
        retirementCalcPage.noSocialRadio.click()
        expect(retirementCalcPage.noSocialBenefits.isSelected()).toBe(true)
        expect(retirementCalcPage.yesSocialBenefits.isSelected()).toBe(false)
        expect(retirementCalcPage.socialSecurityField.isDisplayed()).toBe(false)
    })
})