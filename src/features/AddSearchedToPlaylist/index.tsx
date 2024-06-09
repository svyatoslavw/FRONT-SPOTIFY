import { useProfile } from '@/entities/user/models/useProfile';
import { Button } from '@/shared/ui/button';
import { Checkbox } from '@/shared/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { PlusCircleIcon } from 'lucide-react';
import { Dispatch, FC, SetStateAction } from 'react';

interface IMenu {
  addToPlaylistHandler: () => void;
  playId: number | null;
  setPlayId: Dispatch<SetStateAction<number | null>>;
  setTrack: () => void;
}

const AddSearchedToPlaylist: FC<IMenu> = ({
  addToPlaylistHandler,
  playId,
  setPlayId,
  setTrack,
}) => {
  const { profile, loading } = useProfile();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircleIcon
            onClick={setTrack}
            className="hover:scale-125 transition-all"
            strokeWidth={1.5}
            size={20}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="dark">
        <DialogHeader className="flex text-center text-white justify-center">
          Update Playlist
        </DialogHeader>
        <div>
          {profile &&
            !loading &&
            profile?.favorites?.map((favorites) => (
              <label
                htmlFor={String(favorites.playlist.id)}
                key={favorites.playlist.id}
                className="px-2 py-2 flex gap-2 items-center hover:bg-secondary/80 rounded cursor-pointer"
              >
                <Checkbox
                  id={String(favorites.playlist.id)}
                  onCheckedChange={() => {
                    if (favorites.playlist.id === playId) {
                      setPlayId(null);
                    } else {
                      setPlayId(favorites.playlist.id);
                    }
                  }}
                  checked={favorites.playlist.id === playId}
                  color="success"
                />
                <span className="text-white">{favorites.playlist.name}</span>
              </label>
            ))}
        </div>
        <DialogFooter className="dark">
          <Button
            disabled={!playId}
            variant={'default'}
            className="text-center w-full disabled:opacity-70"
            onClick={addToPlaylistHandler}
          >
            Add to playlist
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { AddSearchedToPlaylist };
