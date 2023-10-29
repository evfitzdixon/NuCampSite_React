const myProperty = "foo";
const myObject = {
    [myProperty]: "This is a test"
};
myObject;

const landVehicles = ["sedan", "truck", "van"];
const waterVehicles = ["canoe", "sailboat", "submarine"];

const vehicles = [...landVehicles, ...waterVehicles];
vehicles;

const moreLandVehicles = [...landVehicles, "tank"];
moreLandVehicles;

const allVehicles = [...vehicles, ...moreLandVehicles];
allVehicles;

const mixNMatch = [...landVehicles, "banana", 3, 3, { someObjProperty: "someObjPropertyValue" }, ...waterVehicles];
mixNMatch;

const objOne = { color: "blue", height: 12 };
const objTwo = { material: "ceramic", width: 6 };
const objOneAndTwoCombined = { ...objOne, ...objTwo };
objOneAndTwoCombined;

const objThree = { color: "red", width: 7 };
const objOneAndThreeCombined = { ...objOne, ...objThree };

objOneAndThreeCombined;
const objThreeAndOneCombined = { ...objThree, ...objOne };
objThreeAndOneCombined;

const objOneUpdatedHeight = { ...objOne, height: 300 };
objOneUpdatedHeight;




