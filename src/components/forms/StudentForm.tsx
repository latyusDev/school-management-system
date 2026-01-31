import React, { useState } from 'react'
import { User, Lock, Mail, Phone, MapPin, Calendar, Upload, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface TeacherFormProps {
  type: 'create' | 'update';
  data?: any;
}

const schema = z.object({
  username: z.string()
    .min(2, { message: 'username required and must be at least 3 characters' })
    .max(20, { message: 'username must not exceed 20 characters' }),
  password: z.string()
    .min(8, { message: 'password required and must be at least 8 characters' }),
  firstName: z.string().min(1, { message: 'First name required' }),
  lastName: z.string().min(1, { message: 'Last name required' }),
  phone: z.string()
    .min(11, { message: 'phone is required and must be 11 characters' })
    .max(11, { message: 'phone is required and must be 11 characters' }),
  address: z.string().min(1, { message: 'address required' }),
  birthday: z.date({ message: 'Birthday is required' }),
  sex: z.enum(['male', 'female'], { message: 'Sex is required' }),
  email: z.string()
    .email({ message: 'Invalid email!' }),
  img: z.instanceof(File, { message: 'Image is required' })
});

type StudentFormData = z.infer<typeof schema>;

const StudentForm = ({ type, data }: TeacherFormProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormData>({
    resolver: zodResolver(schema),
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    const fileInput = document.getElementById('img-upload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const onSubmit = (formData: StudentFormData) => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
            <h2 className="text-3xl font-bold text-white text-center">{type === 'create'?'Student Registration':'Update student details'}</h2>
            <p className="text-indigo-100 text-center mt-2">Authentication information</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8">
            {/* Profile Image Upload */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-indigo-200 overflow-hidden bg-gray-100 flex items-center justify-center">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-16 h-16 text-gray-400" />
                  )}
                </div>
                {imagePreview && (
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}
                <label htmlFor="img-upload" className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-700 transition-colors shadow-lg">
                  <Upload size={20} />
                  <input
                    id="img-upload"
                    type="file"
                    accept="image/*"
                    {...register('img')}
                    onChange={(e) => {
                      register('img').onChange(e);
                      handleImageChange(e);
                    }}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            {errors.img && <p className="text-red-500 text-sm text-center -mt-4 mb-6">{errors.img.message}</p>}

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    {...register('firstName')}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter first name"
                  />
                </div>
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    {...register('lastName')}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter last name"
                  />
                </div>
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Username <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    {...register('username')}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Choose a username"
                  />
                </div>
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="password"
                    {...register('password')}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Min. 8 characters"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    {...register('phone')}
                    maxLength={11}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="08012345678"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              {/* Birthday */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Birthday <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="date"
                    {...register('birthday', { valueAsDate: true })}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
                {errors.birthday && <p className="text-red-500 text-sm mt-1">{errors.birthday.message}</p>}
              </div>

              {/* Sex */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      value="male"
                      {...register('sex')}
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      value="female"
                      {...register('sex')}
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-gray-700">Female</span>
                  </label>
                </div>
                {errors.sex && <p className="text-red-500 text-sm mt-1">{errors.sex.message}</p>}
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                  <textarea
                    {...register('address')}
                    rows={3}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    placeholder="Enter your full address"
                  />
                </div>
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] shadow-lg"
              >
                {type === 'create' ? 'Register Student' : 'Update Student'}
              </button>
            </div>
{/* 
            <p className="text-center text-gray-600 text-sm mt-6">
              Already have an account?{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                Sign in here
              </a>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;