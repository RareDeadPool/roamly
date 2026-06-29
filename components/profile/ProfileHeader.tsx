import React from "react";
import { MapPin, Calendar, UserPlus } from "lucide-react";
import { User } from "../../types/user";
import Button from "../shared/Button";

interface ProfileHeaderProps {
  user: User;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-sand-300 pb-8 mb-8 text-center sm:text-left">
      {/* Avatar */}
      {user.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={user.image}
          alt={user.name}
          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md shadow-deep-navy-950/5 shrink-0"
        />
      ) : (
        <div className="w-28 h-28 rounded-full bg-sand-300 border-4 border-white shadow-md flex items-center justify-center text-3xl font-bold shrink-0">
          {user.name.charAt(0)}
        </div>
      )}

      {/* Info */}
      <div className="space-y-4 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-black text-deep-navy-900 md:text-3xl">{user.name}</h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-deep-navy-500 font-bold">
              {user.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange-500" />
                  {user.location}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-teal-600" />
                Joined {new Date(user.joinedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
              </span>
            </div>
          </div>

          <Button variant="primary" className="py-2.5 text-xs self-center sm:self-start">
            <UserPlus className="w-4 h-4" />
            Follow
          </Button>
        </div>

        {user.bio && (
          <p className="text-sm text-deep-navy-600 max-w-2xl leading-relaxed">
            {user.bio}
          </p>
        )}
      </div>
    </div>
  );
}
