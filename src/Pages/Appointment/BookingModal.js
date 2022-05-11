import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg pb-5 text-center">Booking for <span className='text-secondary'>{name}</span></h3>
                    <form onSubmit={handleBooking} className='space-y-2 flex flex-col items-center justify-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option slot={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full max-w-xs" />
                    </form>
                    {/* <div class="modal-action">
                        <label for="booking-modal" class="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;