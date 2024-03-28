import { updateTask, createTask } from './taskActions';
import { BASE_URL } from '../config'; 

describe('updateTask', () => {
  const id = '123';
  const taskData = { title: 'Updated Task', description: 'Updated Description' };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should send a PATCH request to update task data', async () => {
    const mockResponseData = { _id: '123', title: 'Updated Task', description: 'Updated Description' };
    const mockResponse = { ok: true, json: () => Promise.resolve(mockResponseData) };
    jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

    await updateTask(id, taskData);

    expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}/api/tasks/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData),
    });
  });

  it('should return response data when request is successful', async () => {
    const mockResponseData = { _id: '123', title: 'Updated Task', description: 'Updated Description' };
    const mockResponse = { ok: true, json: () => Promise.resolve(mockResponseData) };
    jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

    const response = await updateTask(id, taskData);

    expect(response).toEqual(mockResponseData);
  });


});

describe('createTask', () => {
  const taskData = { title: 'New Task', description: 'New Description' };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should send a POST request to create a new task', async () => {
    const mockResponseData = { _id: '123', title: 'New Task', description: 'New Description' };
    const mockResponse = { ok: true, json: () => Promise.resolve(mockResponseData) };
    jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

    await createTask(taskData);

    expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}/api/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData),
    });
  });

  it('should return response data when request is successful', async () => {
    const mockResponseData = { _id: '123', title: 'New Task', description: 'New Description' };
    const mockResponse = { ok: true, json: () => Promise.resolve(mockResponseData) };
    jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

    const response = await createTask(taskData);

    expect(response).toEqual(mockResponseData);
  });

 
});
