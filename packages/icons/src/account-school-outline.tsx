import { mdiAccountSchoolOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountSchoolOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountSchoolOutline} {...props} />;
}

export { mdiAccountSchoolOutline as path };
