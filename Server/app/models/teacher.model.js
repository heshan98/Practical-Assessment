module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        teacherName: String,
        userId: String 
      },
      { timestamps: true },
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Teacher = mongoose.model("teacher", schema); 
    return Teacher;
};
