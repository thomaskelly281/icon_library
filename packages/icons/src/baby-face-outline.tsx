import { mdiBabyFaceOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BabyFaceOutline(props: IconComponentProps) {
  return <Icon path={mdiBabyFaceOutline} {...props} />;
}

export { mdiBabyFaceOutline as path };
