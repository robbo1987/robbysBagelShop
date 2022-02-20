const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABSE_URL || "postgres://localhost/robbys_bagel_shop"
);

const UUID = Sequelize.DataTypes.UUID;
const UUIDV4 = Sequelize.DataTypes.UUIDV4;

const Employees = sequelize.define("employees", {
  name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  category: {
    type: Sequelize.ENUM("Director", "Manager", "Analyst"),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

const init = () => {
  try {
    console.log("data is seeded");
  } catch (ex) {
    console.log(ex);
  }
};

init();
