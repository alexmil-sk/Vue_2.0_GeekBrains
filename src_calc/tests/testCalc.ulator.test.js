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
		//,__Пишем любое значение операнда для проверки сложения, например 1
		op1.setValue('3');
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем любое значение операнда для проверки сложения, например 2
		op2.setValue('2');
		const btnOp = wrapper.find('button[value="+"]');
		btnOp.trigger('click');
		//,__Пишем проверку сложения для пары чисел неважно каких, например 1+2=3
		expect(wrapper.vm.result).toBe(5);
	});
});

describe('Calculator test operation', () => {
	it('Test method getSubtraction()', () => {
		const wrapper = mount(Calculator);
		const op1 = wrapper.find('input[data-test=operand1]');
		//,__Пишем любое значение операнда для проверки сложения, например 1
		op1.setValue('3');
		const op2 = wrapper.find('input[data-test=operand2]');
		//,__Пишем любое значение операнда для проверки сложения, например 2
		op2.setValue('2');
		const btnOp = wrapper.find('button[value="-"]');
		btnOp.trigger('click');
		//,__Пишем проверку сложения для пары чисел неважно каких, например 1+2=3
		expect(wrapper.vm.result).toBe(1);
	});
});