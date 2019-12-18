import { expect } from 'chai'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ShowRecipe from '@/components/ShowRecipe.vue'

describe('ShowRecipe.vue', () => {
  it('shows a recipe', () => {
    let recipe = {
      "id": 1,
      "name": "Cranberry Stuffed Turkey Breasts",
      "recipeBy": "Esther Nelson",
      "ingredients": [
        "1 (12 ounce) package herb-seasoned bread stuffing mix",
        "2 skinless boneless turkey breasts",
        "1 cup chopped pecans",
        "2 (8 ounce) packages dried, sweetened cranberries",
        "6 lettuce leaves",
        "1/2 cup pecan halves"
      ]
    }
    const wrapper = shallowMount(ShowRecipe, {
      propsData: { recipe },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.text()).to.include(recipe.name)
  })
})
