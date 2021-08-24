import Vuex from 'vuex';
import { createLocalVue, mount } from '@vue/test-utils';
import { beforeEach, expect, it } from '@jest/globals';
import AddCostsForm from '../components/AddCostsForm';

const LocalVue = createLocalVue();
LocalVue.use(Vuex);

describe('AddCostsForm', () => {
	let mutations;
	let actions;
	let getters;
	let store;
	beforeEach(() => {
		mutations = {
			addDataToPaymentList: jest.fn(),//fn - функция пустышка-заглушка для проверки вызова мутации при вызове метода onSave
		},
		
		getters = {
			getCategories: jest.fn(),
		},
		
		actions = {
			fetchCategoryList: jest.fn(),
		},
		
		store = new Vuex.Store({
			mutations,
			actions,
			getters
		});
	});

	it('click mutations', () => {
		const wrapper = mount(AddCostsForm, {
			store,
			LocalVue
		});

		//const inputValue = wrapper.find('input[name=value]');
		//inputValue.setValue('20');
		//expect(wrapper.vm.value).toBe(20);

		wrapper.find('button[data-test="onSave"]').trigger('click');
		expect(mutations.addDataToPaymentList).toHaveBeenCalled();

	});
});