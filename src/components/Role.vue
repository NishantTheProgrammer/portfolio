<script lang="ts">

export default {
    data() {
        return {
            roles: [
                "Programmer",
                "Freelancer",
                "Node",
                "Express",
                "Mongo",
                "Angular",
                "React",
                "Vue",
            ],
            role: 'Programmer',
            write: false,
            selected: 0
        }
    },
    mounted() {
        setInterval(() => {
            if (!this.write) {
                if (this.role.length !== 0) {
                    this.role = this.role.slice(0, this.role.length - 1);
                }
                else {
                    
                    this.selected =  (this.selected + 1) % this.roles.length;
                    this.write = true;
                }
            }
            else {
                if (this.role !== this.roles[this.selected]) {
                    this.role = this.roles[this.selected].slice(0, this.role.length + 1);
                }
                else {
                    this.write = false;
                }
            }
        }, 100);
    }
}


</script>


<template>
    <span class="text-black py-1 px-3 rounded-md bg-green-400">{{ role }}</span>
</template>