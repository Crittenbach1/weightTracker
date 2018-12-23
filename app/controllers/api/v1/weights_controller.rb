class Api::V1::WeightsController < Api::V1::BaseController
  def index
    respond_with Weight.all
  end

  def create
    respond_with :api, :v1, Weight.create(weight_params)
  end

  private

  def weight_params
    params.require(:weight).permit(:pounds)
  end
end
