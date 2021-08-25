import { mount } from '@vue/test-utils';
import Calculator from '../components/Calculator';

describe('Calculator test input', () => {
	it('Test operand1 input value', () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Вариант-1 написания
		op1.setValue('1');
		//,__Вариант-2 написания
		//op1.element.value = '1';
		//op1.trigger('input');
		expect(wrapper.vm.operand1).toBe(1);
	});

	it('Test operand2 input value', () => {
		const wrapper = mount(Calculator);
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Вариант-1 написания
		op2.setValue('1');
		//,__Вариант-2 написания
		//op2.element.value = '1';
		//op2.trigger('input');
		expect(wrapper.vm.operand2).toBe(1);
	});
});

describe('Calculator test operation', () => {
	it('Test method getAddition()', () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем любое значение операнда для проверки сложения, например 3
		op1.setValue('3');
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем любое значение операнда для проверки сложения, например 2
		op2.setValue('2');
		const btnOp = wrapper.find('button[value="+"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел неважно каких, например 3+2=5
		expect(wrapper.vm.result).toBe(5);
	});

	it("Test method getAddition() control operand1 string='' ", () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем значение операнда ""
		op1.setValue('');
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем любое значение операнда для проверки сложения, например 2
		op2.setValue(2);
		const btnOp = wrapper.find('button[value="+"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел ""+2=5
		expect(wrapper.vm.result).toBe('Ошибка ввода!!!');
	});

	it('Test method getSubtraction()', () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем любое значение операнда для проверки вычитания, например 3
		op1.setValue(3);
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем любое значение операнда для проверки вычитания, например 2
		op2.setValue(2);
		const btnOp = wrapper.find('button[value="-"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел неважно каких, например 3-2=1
		expect(wrapper.vm.result).toBe(1);
	});

	it("Test method getSubtraction() control operand1 = '' ", () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем значение операнда 0
		op1.setValue('');
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем значение операнда для проверки вычитания, например 2
		op2.setValue(2);
		const btnOp = wrapper.find('button[value="-"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел 0-2=
		expect(wrapper.vm.result).toBe('Ошибка ввода!!!');
	});

	it('Test method getDivision()', () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем любое значение операнда для проверки деления, например 6
		op1.setValue(6);
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем любое значение операнда для проверки деления, например 2
		op2.setValue(2);
		const btnOp = wrapper.find('button[value="/"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел неважно каких, например 6/2=3
		expect(wrapper.vm.result).toBe('3.00000');
	});

	it("Test method getDivision() control operand2 = 0 ", () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем значение операнда 2
		op1.setValue(2);
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем значение операнда 0
		op2.setValue(0);
		const btnOp = wrapper.find('button[value="/"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел 0-2=
		expect(wrapper.vm.result).toBe('Ошибка ввода!!!');
	});

	it('Test method getMultiple()', () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем любое значение операнда для проверки умножения, например 6
		op1.setValue(6);
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем любое значение операнда для проверки умножения, например 2
		op2.setValue(2);
		const btnOp = wrapper.find('button[value="*"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел неважно каких, например 6/2=3
		expect(wrapper.vm.result).toBe('12.00000');
	});

	it("Test method getMultiple() control operand2 = '' ", () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем значение операнда ''
		op1.setValue('');
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем значение операнда ''
		op2.setValue('');
		const btnOp = wrapper.find('button[value="*"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел '' * ''
		expect(wrapper.vm.result).toBe('Ошибка ввода!!!');
	});

	it('Test method getExponent()', () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем любое значение операнда для проверки возведения в степень, например 2
		op1.setValue(2);
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем любое значение операнда для проверки возведения в степень, например 2
		op2.setValue(2);
		const btnOp = wrapper.find('button[value="x^"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел неважно каких, например 2^2=4
		expect(wrapper.vm.result).toBe('4.00000');
	});

	it("Test method getExponent() control operand2 = '' ", () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем значение операнда 2
		op1.setValue(2);
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем значение операнда 0
		op2.setValue('');
		const btnOp = wrapper.find('button[value="x^"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел  2 ^ ''
		expect(wrapper.vm.result).toBe('Ошибка ввода!!!');
	});

	it('Test method getDivision2()', () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем любое значение операнда для проверки целочисленного деления, например 10
		op1.setValue('10');
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем любое значение операнда для проверки целочисленного деления, например 3
		op2.setValue('3');
		const btnOp = wrapper.find('button[value="ЦД"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел неважно каких, например 10 ЦД 3 =3
		expect(wrapper.vm.result).toBe(3);
	});

	it("Test method getDivision2() control operand2 = 0 ", () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем значение операнда 2
		op1.setValue(2);
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем значение операнда 0
		op2.setValue(0);
		const btnOp = wrapper.find('button[value="ЦД"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел 2 ЦД 0
		expect(wrapper.vm.result).toBe('Ошибка ввода!!!');
	});

	it('Test method getSquareR()', () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем любое значение операнда для проверки квадратного корня, например 16
		op1.setValue(16);
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Операнд 2 не используется
		op2.setValue('');
		const btnOp = wrapper.find('button[value="(x)1/2"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел неважно каких, например 10 ЦД 3 =3
		expect(wrapper.vm.result).toBe('4.00000');
	});

	it("Test method getSquareR() control operand1 = '' ", () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем значение операнда 2
		op1.setValue('');
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Операнд 2 не используется
		op2.setValue(0);
		const btnOp = wrapper.find('button[value="(x)1/2"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел '' ^ 1/2
		expect(wrapper.vm.result).toBe('Ошибка ввода!!!');
	});

	it('Test method getFract()', () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем любое значение операнда для проверки дроби, например 16
		op1.setValue(10);
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Операнд 2 не используется
		op2.setValue('');
		const btnOp = wrapper.find('button[value="1/x"]');
		btnOp.trigger('click');
		//,__Пишем проверку сложения для пары чисел неважно каких, например 1 / 10 = 0,1
		expect(wrapper.vm.result).toBe('0.10000');
	});

	it("Test method getFract() control operand1 = 0 ", () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем значение операнда 2
		op1.setValue(0);
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Операнд 2 не используется
		op2.setValue(0);
		const btnOp = wrapper.find('button[value="1/x"]');
		btnOp.trigger('click');
		//,__Пишем проверку для пары чисел 1 / 0
		expect(wrapper.vm.result).toBe('Ошибка ввода!!!');
	});

	it('Test method default()', () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем любое значение операнда для проверки default, например 2
		op1.setValue('2');
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем любое значение операнда для проверки default, например 2
		op2.setValue('2');
		const btnOp = wrapper.find('button[value="null"]');
		btnOp.trigger('click');
		//,__Пишем проверку default 
		expect(wrapper.vm.result).toBe('');
	});
});

describe('Calculator test keyboard', () => {
			it('Test cleanNum button operand1', () => {
				const wrapper = mount(Calculator);
				const cleanNum = wrapper.find('button[name="cleanNum"]');
				const op1 = wrapper.find('input[data-test=operand1]');
				//,__Вариант-1 написания
				op1.setValue(1);
				cleanNum.trigger('click');
				//,__Вариант-2 написания
				//op1.element.value = '1';
				//op1.trigger('input');
				//,__Expect
				//expect(wrapper.vm.operands2).toBe([1]);
				expect(wrapper.vm.operand1).toBe(NaN);
			});
	
			it('Test cleanNum button operand2', () => {
				const wrapper = mount(Calculator);
				const cleanNum = wrapper.find('button[name="cleanNum"]');
				const checkboxOperand = wrapper.find('input[name="radioOperand2"]');
				const op2 = wrapper.find('input[data-test=operand2]');
				//,__Вариант-1 написания
				checkboxOperand.setChecked(true);
				op2.setValue(1);
				//keyboardNum.setValue(1);
				cleanNum.trigger('click');
				//,__Вариант-2 написания
				//op1.element.value = '1';
				//op1.trigger('input');
				//,__Expect
				expect(wrapper.vm.operand2).toBe(NaN);
			});

			it('Test delKeyNum button operand1', () => {
				const wrapper = mount(Calculator);
				const delKeyNum = wrapper.find('button[name="delKeyNum"]');
				const op1 = wrapper.find('input[data-test=operand1]');
				//,__Вариант-1 написания
				op1.setValue(123);
				delKeyNum.trigger('click');
				//,__Вариант-2 написания
				//op1.element.value = '1';
				//op1.trigger('input');
				//,__Expect
				expect(wrapper.vm.operand2).toBe('');
			});
	
			it('Test delKeyNum button operand2', () => {
				const wrapper = mount(Calculator);
				const delKeyNum = wrapper.find('button[name="delKeyNum"]');
				const checkboxOperand = wrapper.find('input[name="radioOperand2"]');
				const op2 = wrapper.find('input[data-test=operand2]');
				//,__Вариант-1 написания
				checkboxOperand.setChecked(true);
				op2.setValue(123);
				//keyboardNum.setValue(1);
				delKeyNum.trigger('click');
				//,__Вариант-2 написания
				//op1.element.value = '1';
				//op1.trigger('input');
				//,__Expect
				expect(wrapper.vm.operand2).toBe('Введите 2-й операнд');
			});
		
});
