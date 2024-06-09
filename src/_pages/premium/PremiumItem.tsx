'use client';
import { Mutation } from '@/__generated__/ggl/graphql';
import { client } from '@/shared/api/apollo.config';
import { CREATE_PAYMENT } from '@/shared/api/graphql/mutations/CreatePayment';
import {
  IPremiumItems,
  IPremiumText,
} from '@/shared/lib/constants/premium.constant';
import { IFullUser } from '@/types/user.types';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import toast from 'react-hot-toast';

interface IPremiumItem {
  item: IPremiumItems;
  profile: IFullUser;
}

const PremiumItem: FC<IPremiumItem> = ({ item, profile }) => {
  //const queryClient = useQueryClient()
  const { push } = useRouter();
  // const { mutate, isSuccess, isError } = useMutation({
  //   mutationKey: ['create premium'],
  //   mutationFn: () => PremiumService.create(item.type, profile.id),
  //   onSuccess(data) {
  //     console.log(data)
  //     push(data.data.url)
  //     //queryClient.refetchQueries({ queryKey: ['profile'] })
  //   },
  // })

  const createButton = async () => {
    try {
      client
        .mutate<Mutation>({
          mutation: CREATE_PAYMENT,
          variables: {
            type: item.type,
            id: profile.id,
          },
        })
        .then(({ data }) => {
          if (data && data.createPayment) {
            toast.success('Payment created');
            push(data.createPayment.url);
          }
        });
    } catch (error) {}
  };

  return (
    <div
      key={item.id}
      className="border-4 p-2 rounded-xl w-80"
      style={{ borderColor: item.color }}
    >
      <span
        className="px-3 py-0.5 truncate rounded-full mb-3 text-black"
        style={{ backgroundColor: item.color }}
      >
        Free for 1 month
      </span>
      <div className="flex truncate py-2 justify-between items-center mb-8">
        <p className="text-2xl font-medium">{item.type}</p>
        <span className="text-xs">FREE FOR 1 MONTH</span>
      </div>
      <div className="mb-2 h-32">
        {item.points.map((text: IPremiumText) => (
          <p className="my-2 truncate text-sm" key={text.title}>
            • {text.title}
          </p>
        ))}
      </div>
      <button
        onClick={createButton}
        className="py-3 flex px-10 font-semibold rounded-full mb-6 text-xs text-black text-center hover:scale-105 duration-200 w-full"
        style={{ backgroundColor: item.color }}
      >
        Спробувати безкоштовно на 1 місяць
      </button>
      <p className="text-center text-xs">{item.description}</p>
    </div>
  );
};

export default PremiumItem;
