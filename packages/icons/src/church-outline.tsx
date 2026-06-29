import { mdiChurchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChurchOutline(props: IconComponentProps) {
  return <Icon path={mdiChurchOutline} {...props} />;
}

export { mdiChurchOutline as path };
