class Todo < ActiveRecord::Base
  scope :incomplete, -> { where(is_complete:false)}
  scope :complete, -> { where(is_complete:true)}
end