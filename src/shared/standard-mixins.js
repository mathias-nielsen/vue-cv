export const titleMixins = {
  created() {
    this.emitNewTitle(this.title);
  },

  methods: {
    emitNewTitle() {
      this.$emit("newTitle", this.title);
    }
  }
};
