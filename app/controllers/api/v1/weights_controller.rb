class Api::V1::WeightsController < Api::V1::BaseController
  def index
    respond_with Weight.all
  end

  def create
    respond_with :api, :v1, Weight.create(weight_params)
  end

  def destroy
    respond_with Weight.destroy(params[:id])
  end

  def update
    weight = Weight.find(params["id"])
    weight.update_attributes(weight_params)
    respond_with weight, json: weight
  end

  private

  def weight_params
    params.require(:weight).permit(:pounds)
  end
end
