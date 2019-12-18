<template>
    <div id='product-create'>
        <h1>Contact US</h1>
        <form >
            <div class='form-group'>
                <label for='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    :class='{ "form-input-error": $v.name.$error }'
                    v-model='$v.name.$model'
                />

                <div v-if='$v.name.$error'>
                    <div
                        class='form-feedback-error'
                        v-if='!$v.name.required'
                     > Name is required.
                    </div>
                    <div
                        class='form-feedback-error'
                        v-else-if='!$v.name.minLength'
                    > Name must be at least 2 characters long.
                    </div>
                </div>
            </div>

            <div class='form-group'>
                <label for='email'>Your Email</label>
                <input
                    type='text'
                    :class='{ "form-input-error": $v.email.$error }'
                    id='email'
                    v-model='$v.email.$model'
                />

                <div v-if='$v.email.$error'>
                    <div
                        class='form-feedback-error'
                        v-if='!$v.email.required'
                     > Email is required.
                    </div>
                    <div
                        class='form-feedback-error'
                        v-else-if='!$v.email.email'
                    > Name must be in a valid format.
                    </div>
                </div>

            </div>


            <div class='form-group'>
                <label for='message'>Message</label>
                <textarea
                    id='message'
                    :class='{ "form-input-error": $v.email.$error }'
                    v-model='$v.message.$model'
                ></textarea>

                <div v-if='$v.name.$error'>
                    <div
                        class='form-feedback-error'
                        v-if='!$v.message.required'
                     > Message is required.
                    </div>
                    <div
                        class='form-feedback-error'
                        v-else-if='!$v.message.minLength'
                    > Message must be at least 20 characters long.
                    </div>
                </div>
            </div>

            <button data-test='submit-form' type='submit'>Submit</button>

        </form>
    </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
    data() {
    return {
      name: "",
      email: "",
      message: ""
    }
  },
    validations: {
        name:{ required, minLength: minLength(3),},
        email: {required, email, },
        message: {required, minLength: minLength(20),}
    }
}
</script>

<style scoped>
#description {
    height: 150px;
}
</style>
