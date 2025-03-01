class TasksController < ApplicationController
  def index
    tasks = Task.all
    render status: :ok, json: { tasks: }
  end
end