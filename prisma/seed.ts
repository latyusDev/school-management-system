// prisma/seed.ts
import { randomUUID } from 'crypto'
import prisma from '../src/lib/db'

async function main() {
  // ADMIN (20)
  await prisma.admin.createMany({
    data: Array.from({ length: 20 }).map((_, i) => ({
      id: randomUUID(),
      username: `admin${i + 1}`,
    })),
    skipDuplicates: true,
  })

  // GRADES (20)
  const grades = await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.grade.create({ data: { level: `Grade ${i + 1}` } })
    )
  )

  // TEACHERS (20)
  const teachers = await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.teacher.create({
        data: {
          id: randomUUID(),
          username: `teacher${i + 1}`,
          firstName: `Teacher${i + 1}`,
          lastName: 'Smith',
          sex: i % 2 === 0 ? 'MALE' : 'FEMALE',
        },
      })
    )
  )

  // SUBJECTS (20)
  const subjects = await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.subject.create({
        data: {
          name: `Subject ${i + 1}`,
          teacherId: teachers[i % teachers.length].id,
        },
      })
    )
  )

  // CLASSES (20)
  const classes = await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.class.create({
        data: {
          name: `Class ${i + 1}`,
          capacity: 30,
          gradeId: grades[i % grades.length].id,
          supervisorId: teachers[i % teachers.length].id,
        },
      })
    )
  )

  // PARENTS (20)
  const parents = await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.parent.create({
        data: {
          id: randomUUID(),
          username: `parent${i + 1}`,
          firstName: `Parent${i + 1}`,
          lastName: 'Doe',
          phone: `080000000${i}`,
          address: 'Sample Address',
          sex: i % 2 === 0 ? 'MALE' : 'FEMALE',
        },
      })
    )
  )

  // STUDENTS (20)
  const students = await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.student.create({
        data: {
          id: randomUUID(),
          username: `student${i + 1}`,
          firstName: `Student${i + 1}`,
          lastName: 'Doe',
          sex: i % 2 === 0 ? 'MALE' : 'FEMALE',
          classId: classes[i % classes.length].id,
          gradeId: grades[i % grades.length].id,
          parentId: parents[i % parents.length].id,
        },
      })
    )
  )

  // LESSONS (20)
  const lessons = await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.lesson.create({
        data: {
          startTime: new Date(2026, 0, i + 1, 8),
          endTime: new Date(2026, 0, i + 1, 9),
          subjectId: subjects[i % subjects.length].id,
          classId: classes[i % classes.length].id,
          teacherId: teachers[i % teachers.length].id,
        },
      })
    )
  )

  // EXAMS (20)
  await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.exam.create({
        data: {
          title: `Exam ${i + 1}`,
          startTime: new Date(2026, 1, i + 1, 9),
          endTime: new Date(2026, 1, i + 1, 11),
          lessonId: lessons[i % lessons.length].id,
        },
      })
    )
  )

  // ASSIGNMENTS (20)
  await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.assignment.create({
        data: {
          title: `Assignment ${i + 1}`,
          startDay: new Date(2026, 2, i + 1),
          endDay: new Date(2026, 2, i + 2),
          lessonId: lessons[i % lessons.length].id,
        },
      })
    )
  )

  // ATTENDANCE (20)
  await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.attendance.create({
        data: {
          date: new Date(2026, 3, i + 1),
          isPresent: true,
          studentId: students[i % students.length].id,
          lessonId: lessons[i % lessons.length].id,
        },
      })
    )
  )

  // EVENTS (20)
  await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.event.create({
        data: {
          title: `Event ${i + 1}`,
          description: 'School event',
          startTime: new Date(2026, 4, i + 1, 10),
          endTime: new Date(2026, 4, i + 1, 12),
          classId: classes[i % classes.length].id,
        },
      })
    )
  )

  // ANNOUNCEMENTS (20)
  await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.announcement.create({
        data: {
          title: `Announcement ${i + 1}`,
          description: 'Important notice',
          date: new Date(2026, 5, i + 1),
          classId: classes[i % classes.length].id,
        },
      })
    )
  )

  console.log('✅ Seeded 20 records per table successfully')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())