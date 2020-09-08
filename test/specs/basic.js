import retirementCalcPage from '../pageobjects/retirementCalculator.js'

describe('Retirement Savings Page', () =>{
    beforeEach(function(){
        retirementCalcPage.open()
    })

    afterEach(function(){
        retirementCalcPage.close()
    })

    it('should clear the page when the Clear Form link is clicked', () => {
        retirementCalcPage.currentAge.setValue('30')
        retirementCalcPage.clickClearForm()
        expect(retirementCalcPage.currentAge.getValue()).toBe("")
    }),
    it('should display an error when submitting without any input entered in any fields', () => {
        retirementCalcPage.submitButton.click()
        expect(retirementCalcPage.calculatorInputAlert).toBeDisplayed()
    }),
    it('should be hidden or displayed when option is selected', () => {
        expect(retirementCalcPage.noSocialBenefits.isSelected()).toBe(true)
        expect(retirementCalcPage.yesSocialBenefits.isSelected()).toBe(false)
        expect(retirementCalcPage.maritalStatusGroup.isDisplayed()).toBe(false)
        retirementCalcPage.yesSocialRadio.click()
        expect(retirementCalcPage.noSocialBenefits.isSelected()).toBe(false)
        expect(retirementCalcPage.yesSocialBenefits.isSelected()).toBe(true)
        expect(retirementCalcPage.maritalStatusGroup.isDisplayed()).toBe(true)
        retirementCalcPage.noSocialRadio.click()
        // have to wait explicitly
        browser.pause(500)
        expect(retirementCalcPage.noSocialBenefits.isSelected()).toBe(true)
        expect(retirementCalcPage.yesSocialBenefits.isSelected()).toBe(false)
        expect(retirementCalcPage.maritalStatusGroup.isDisplayed()).toBe(false)
    }),
    it('should be able to be submitted with all required fields filled in', () => {
        retirementCalcPage.currentAge.setValue(40)
        retirementCalcPage.retirementAge.setValue(68)
        retirementCalcPage.currentIncome.setValue(100000)
        retirementCalcPage.currentTotalSavings.setValue(500000)
        retirementCalcPage.currentAnnualSavings.setValue(.25)
        retirementCalcPage.savingsIncreaseRate.setValue(10)
        retirementCalcPage.yesSocialRadio.click()
        retirementCalcPage.martialStatusMarried.waitForDisplayed()
        retirementCalcPage.martialStatusMarried.waitForEnabled()
        // best that can be done to get it to work
        browser.pause(500)
        retirementCalcPage.martialStatusMarried.click()
        retirementCalcPage.socialSecurityOverride.setValue(4000)
        retirementCalcPage.submitButton.click()
        browser.pause(2000)
        expect(retirementCalcPage.results.isDisplayed()).toBe(true)
    })
})