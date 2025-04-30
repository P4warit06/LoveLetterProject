async function getAllData(url) {
  try {
    const data = await fetch(url);
    const finalData = await data.json();
    return finalData;
  } catch (error) {
    throw new Error("can not get your exams");
  }
}

async function getDataById(url, id) {
  try {
    const data = await fetch(`${url}/${id}`);
    const finalData = await data.json();
    return finalData;
  } catch (error) {
    if (data.status === 404) return undefined;
    throw new Error("can not get your finalData");
  }
}

async function addData(url, newData) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...newData,
      }),
    });
    const addedData = await res.json();
    return addedData;
  } catch (error) {
    throw new Error("can not add your Data");
  }
}

async function updateData(url, id, updatedData) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    if (!res.ok) {
      throw new Error("Failed to update data");
    }
    const updatedResponse = await res.json();
    return updatedResponse;
  } catch (error) {
    throw new Error("Cannot update your data");
  }
}

async function updateSomeData(url, id, updatedData) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: "PATCH", // เปลี่ยนจาก PUT เป็น PATCH
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    if (!res.ok) {
      throw new Error("Failed to update data");
    }
    const updatedResponse = await res.json();
    return updatedResponse;
  } catch (error) {
    throw new Error("Cannot update your data");
  }
}

async function deleteUserById(url, id) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    return res.status;
  } catch (error) {
    throw new Error("can not delete your item");
  }
}

export {
  getAllData,
  getDataById,
  addData,
  updateData,
  updateSomeData,
  deleteUserById,
};
