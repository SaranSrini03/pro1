// ─── React ──────────────────────────────────────────────
export { default as React } from "react";
export { useState, useEffect, useRef } from "react";

// ─── Next.js ────────────────────────────────────────────
export { default as Image } from "next/image";
export { default as Link } from "next/link";
export { usePathname } from "next/navigation";

// ─── Next.js Types ─────────────────────────────────────
export type { AppProps } from "next/app";

// ─── Framer Motion ─────────────────────────────────────
export { motion } from "framer-motion";
export type { Variants } from "framer-motion";


// ─── MUI Components ────────────────────────────────────
export {
  Table,
  TableRow,
  TableContainer,
  TableHead,
  Paper,
  TableCell,
  Button,
  Checkbox,
} from "@mui/material";

// ─── Lucide Icons ──────────────────────────────────────
export {
  Edit2,
  Trash2,
  Twitter,
  Linkedin,
  Globe,
  Search,
  Bell,
  Mail,
  UserCircle,
  Menu,
  X,
} from "lucide-react";

// ─── React Icons ───────────────────────────────────────
export { FaInstagram, FaUsers, FaBoxOpen, FaMoneyBillWave, FaCode } from "react-icons/fa";
export { MdOutlineAttachMoney } from "react-icons/md";
export { AiOutlineFileText } from "react-icons/ai";
export { BsClipboardData } from "react-icons/bs";
export { CheckCircledIcon } from "@radix-ui/react-icons";
export { FiMenu, FiX } from "react-icons/fi";

// ─── Custom Components ─────────────────────────────────
export { default as Navbar } from "@/components/Navbar";
export { default as Sidebar } from "@/components/Sidebar";
export { default as Header } from "@/components/Header";
export { default as CampaignHeader } from "@/components/Header"; // alias
export { default as GradientButton } from "@/components/GradientButton";
export { default as Badge } from "@/components/Badge";
export { default as TableHeader } from "@/components/TableHeader";
export { default as TableRowContent } from "@/components/TableRowContent";
export { default as Pagination } from "@/components/Pagination";
export { default as InfluencerCard } from "@/components/Card";
export { default as SearchSortBar } from "@/components/SearchSortBar";
export { default as AnimatedTable } from "@/components/AnimatedTable";
export { default as StatsGrid } from "@/components/StatsGrid";

// ─── Popups ────────────────────────────────────────────
export { default as BudgetPopup } from "@/components/Popups/BudgetPopup";
export { default as ProductPopup } from "@/components/Popups/ProductPopup";
export { default as PaymentPopup } from "@/components/Popups/PaymentPopup";
export { default as CampaignFormPopup } from "@/components/Popups/CampaignFormPopup";

// ─── Data ──────────────────────────────────────────────
export { default as data } from "@/data/influencer";

// ─── Utils / Libraries ─────────────────────────────────
export { default as toast } from "react-hot-toast";
export { Toaster } from "react-hot-toast";

