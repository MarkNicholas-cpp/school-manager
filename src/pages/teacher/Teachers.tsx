import Calendar from 'react-calendar';
import useAuthStore from '../../hooks/useAuthStore';
import StatusCard from './components/StatusCard';
import './Teacher.css';
import StudentAttandance from './components/StudentAttandance';
import Agenda from './components/Agenda';
import StudentPerformance from './components/StudentPerformance';
import TaskComponent from './components/TaskComponent';
import TeachingActivity from './components/TeachingActivity';
import StudentTasks from './components/StudentTasks';
import MessagesNotification from './components/MessagesNotification';
import RecentActivity from './components/RecentActivity';
const Teachers = () => {
    const { user } = useAuthStore()
    return <div className="teachers-grid gap-5 mb-5">
        <div className="div1 banner rounded-xl bg-[var(--color-dark-grey)] pt-5 p-6">
            <p className='text-white heading-lg font-black mb-4'>Your teaching classes are incresing <br /> great about 30% than last year</p>
            <div className="flex gap-3">
                <p className='text-caption text-white'>{user?.name + "@gmail.com"}</p>
                <p className='text-caption text-white'>+91 &nbsp; 9327495349</p>
            </div>
        </div>
        <div className="div5 calander-agenda rounded-xl bg-white shadow-sm p-4">
            <Calendar formatDay={(_, date) =>
                String(date.getDate()).padStart(2, '0')
            }></Calendar>
            <Agenda></Agenda>
        </div>
        <div className="div2 status-cards flex gap-2">
            <StatusCard mode={'inc'} heading={'Total Classess'} value={147} changeInPresentage={15}></StatusCard>
            <StatusCard mode={'dec'} heading={'Total Student'} value={3250} changeInPresentage={5}></StatusCard>
            <StatusCard mode={'dec'} heading={'Total Hours'} value={104687} changeInPresentage={10}></StatusCard>
            <StatusCard mode={'inc'} heading={'Total Income'} value={1682500} changeInPresentage={23} prefix='$'></StatusCard>
        </div>
        <div className="div3 student-attendance bg-white shadow-sm rounded-xl p-4">
            <StudentAttandance></StudentAttandance>
        </div>
        <div className="div4 student-performance bg-white shadow-sm rounded-xl p-4">
            <StudentPerformance></StudentPerformance>
        </div>
        <div className="div6 tasks bg-white shadow-sm rounded-xl p-4">
            <TaskComponent></TaskComponent>
        </div>
        <div className="div7 teaching-activity bg-white shadow-sm p-4 rounded-xl">
            <TeachingActivity></TeachingActivity>
        </div>
        <div className="div8 student-tasks bg-white shadow-sm rounded-xl p-4 h-[650px]">
            <StudentTasks />
        </div>
        <div className="div9 messages bg-white shadow-sm rounded-xl p-4">
            <MessagesNotification></MessagesNotification>
        </div>
        <div className="div10 recent-activity bg-white shadow-sm rounded-xl p-4">
            <RecentActivity></RecentActivity>
        </div>
    </div >;
}

/*
        b  b  b  b   c  c
        b  b  b  b   c  c 
        sc sc sc sc  c  c
        sa sa sp sp  c  c
        t  t  ta ta  ta ta
        t  t  ta ta  ta ta
        t  t  ta ta  ta ta
        st st st st  m  m
        st st st st  m  m
        st st st st  m  m
        st st st st  ra ra
        st st st st  ra ra
        st st st st  ra ra
*/


export default Teachers;