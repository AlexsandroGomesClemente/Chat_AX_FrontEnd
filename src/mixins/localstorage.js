export default {
  mounted() {
    window.addEventListener("storage", this.handleLocalStorageChange);
  },

  beforeDestroy() {
    window.removeEventListener("storage", this.handleLocalStorageChange);
  },

  methods: {
    handleLocalStorageChange(event) {
      if (event.storageArea === localStorage && event.key === "users") {
        const newValue = localStorage.getItem(event.key);

        this.userList = [];
        this.userList.push(...newValue?.split(","));
        this.$emit("localStorageChange", { newValue });
      }
    },
  },
};
