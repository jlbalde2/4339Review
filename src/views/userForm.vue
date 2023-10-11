<template>
    <main>
<div class="containter">
    <form @submit.prevent="handleSubmit">
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" required v-model="email" class="form-control" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" required v-model="password" class="form-control" placeholder="Password">
        <div v-if="passwordError">{{ passwordError }} </div>
    </div>
    <div class="form-group">
        <select v-model="role">
            <option value="student">Student</option>
            <option value="assistant">Assistant</option>
        </select>
    </div>
    <div class="form-group form-check">
        <input type="checkbox" required v-model="terms" class="form-check-input">
        <label class="form-check-label" for="exampleCheck1">Agree to terms and conditions</label>
    </div>
    <label>Skills: </label>
    <input type="text" v-model="tempSkills" @keyup="addSkill">
    <div v-for="skill in skills" :key="skill" class="pill">
    <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>
    <!-- <div>
        <input type="checkbox" value="Josue" v-model="names">
        <label for="">Josue</label>
    </div>
    <div>
        <input type="checkbox" value="Other" v-model="names">
        <label for="">Other</label>
    </div> -->
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div class="container">
    <!-- <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Terms: {{ terms }}</p>
    <p>Skills: {{ skills }}</p>
  -->

</div>
</div>
</main>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            tempSkills: '',
            skills: [],
            passwordError: '',
        
            
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === ',' && this.tempSkills) {
                if (!this.skills.includes(this.tempSkills)) {
                    this.skills.push(this.tempSkills)
                }
                this.tempSkills = ''
            }
        },
        // item can be any name 
        deleteSkill(skill) {
            this.skills = this.skills.filter((item) => {
                return skill !== item
            })
        },
        handleSubmit() {
            // validate passord
            this.passwordError = this.password.length > 5 ? '' : 'password must be at least 6 characters'
            if(!this.passwordError) {
                console.log(this.email)
                console.log(this.password)
                console.log(this.role)
                console.log(this.terms)

            }
        }
    }
}
</script>

<style scoped>
.containter {
    margin-top: 30%;
}
@media (min-width: 1024px) {
  .container {
    margin-top: 50%;
    display: flex;
    align-items: center;
  }
}
</style>