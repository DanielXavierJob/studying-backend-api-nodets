interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppointmentProps;

  get customer() {
    return this.props.customer;
  }

  get startsAt() {
    return this.props.startsAt;
  }
  get endsAt() {
    return this.props.endsAt;
  }

  #validAfterDate(startDate, endDate){
    if(endDate <= startDate){
      throw new Error('Invalid end date');
    }
  }
  #validActualDate(startDate){
    if(startDate <= new Date()){
      throw new Error('Invalid start date')
    }
  }
  constructor(props: AppointmentProps) {
    const {startsAt , endsAt} = props
    this.#validAfterDate(startsAt, endsAt)
    this.#validActualDate(startsAt)

    this.props = props;
  }
}
