import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import { insertion, deletion } from "../db/seeds/users";
import { after } from "mocha";

chai.use(chaiHttp);
const should = chai.should();

describe("Users", function() {
  beforeEach(done => {
    insertion(1);
    done();
  });
  afterEach(done => {
    deletion();
    done();
  });
  it("should list ALL users on /users GET", done => {
    chai
      .request(app)
      .get("/users")
      .end(function(err, res) {
        console.log(res.body);
        res.should.be.json;
        res.should.have.status(200);
        res.body.should.have.property("users");
        res.body.users.should.be.a("array");
        res.body.users[0].should.have.property("id");
        res.body.users[0].should.have.property("name");
        res.body.users[0].name.should.equal("Hazem");
        res.body.users[0].should.have.property("email");
        res.body.users[0].email.should.equal("hazem@gmail");
        done();
      });
  });
  it("should list a SINGLE user on /users/<id> GET");
  it("should add a SINGLE user on /users POST");
  it("should update a SINGLE user on /users/<id> PUT");
  it("should delete a SINGLE user on /users/<id> DELETE");
});
